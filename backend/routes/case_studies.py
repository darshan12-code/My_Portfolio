from flask import Blueprint, request, jsonify
from extensions import db
from models import CaseStudy
from flask_jwt_extended import jwt_required, get_jwt
from utils.decorators import admin_required, demo_or_admin_required
from utils.helpers import generate_slug
from utils.cloudinary_helpers import (
    collect_all_images_for_record,
    delete_cloudinary_images,
    extract_content_image_urls,
)
import time

case_bp = Blueprint("case_studies", __name__, url_prefix="/portfolio/case-studies")


def serialize_case(case):
    return {
        "id":              case.id,
        "title":           case.title,
        "slug":            case.slug,
        "summary":         case.summary,
        "content":         case.content,
        "tech_stack":      case.tech_stack,
        "thumbnail":       case.thumbnail,
        "github_url":      case.github_url,
        "live_url":        case.live_url,
        "category":        case.category,
        "company_project": case.company_project,
        "is_published":    case.is_published,
        "is_demo":         case.is_demo,
        "created_at":      case.created_at.isoformat() if case.created_at else None,
    }


# ── Public: real cases only ────────────────────────────────────
@case_bp.route("", methods=["GET"])
def get_all():
    cases = CaseStudy.query.filter_by(is_published=True, is_demo=False)\
        .order_by(CaseStudy.created_at.desc()).all()
    return jsonify({"data": [serialize_case(c) for c in cases]})


@case_bp.route("/<slug>", methods=["GET"])
def get_by_slug(slug):
    case = CaseStudy.query.filter_by(
        slug=slug, is_published=True, is_demo=False
    ).first_or_404()
    return jsonify(serialize_case(case))


@case_bp.route("/featured", methods=["GET"])
def get_featured():
    cases = CaseStudy.query.filter_by(is_featured=True, is_demo=False)\
        .order_by(CaseStudy.created_at.desc()).limit(4).all()
    return jsonify({"data": [c.to_dict() for c in cases]})


# ── Demo preview ───────────────────────────────────────────────
@case_bp.route("/demo-preview", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def demo_preview_all():
    cases = CaseStudy.query.filter_by(is_published=True, is_demo=True)\
        .order_by(CaseStudy.created_at.desc()).all()
    return jsonify({"data": [serialize_case(c) for c in cases]})


@case_bp.route("/demo-preview/<slug>", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def demo_preview_slug(slug):
    case = CaseStudy.query.filter_by(slug=slug, is_demo=True).first_or_404()
    return jsonify(serialize_case(case))


# ── Admin list ─────────────────────────────────────────────────
# admin → only real (is_demo=False)
# demo  → only demo (is_demo=True)
@case_bp.route("/admin", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def admin_get_all():
    claims = get_jwt()
    role   = claims.get("role")
    flag   = False if role == "admin" else True
    cases  = CaseStudy.query.filter_by(is_demo=flag).order_by(CaseStudy.created_at.desc()).all()
    return jsonify({"total": len(cases), "data": [serialize_case(c) for c in cases]})


# ── Create ─────────────────────────────────────────────────────
@case_bp.route("", methods=["POST"])
@jwt_required()
@demo_or_admin_required
def create_case():
    try:
        claims = get_jwt()
        role   = claims.get("role")
        data   = request.form

        # ── server-side validation ─────────────────────────────
        title = (data.get("title") or "").strip()
        if not title:
            return jsonify({"error": "Title is required"}), 400
        if len(title) > 200:
            return jsonify({"error": "Title too long (max 200 chars)"}), 400
        if not (data.get("summary") or "").strip():
            return jsonify({"error": "Summary is required"}), 400
        if not (data.get("category") or "").strip():
            return jsonify({"error": "Category is required"}), 400
        if not (data.get("tech_stack") or "").strip():
            return jsonify({"error": "Tech stack is required"}), 400

        slug = generate_slug(title)
        if CaseStudy.query.filter_by(slug=slug).first():
            slug = f"{slug}-{int(time.time())}"

        case = CaseStudy(
            title           = title,
            slug            = slug,
            summary         = data.get("summary").strip(),
            content         = data.get("content"),
            tech_stack      = data.get("tech_stack").strip(),
            thumbnail       = data.get("thumbnail") or None,
            github_url      = data.get("github_url") or None,
            live_url        = data.get("live_url")   or None,
            category        = data.get("category").strip(),
            company_project = data.get("company_project") == "true",
            is_published    = data.get("is_published", "true") == "true",
            is_demo         = (role == "demo"),
        )
        db.session.add(case)
        db.session.commit()
        return jsonify({"message": "Case Study Created", "data": serialize_case(case)})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

# ── Update ─────────────────────────────────────────────────────
@case_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
@demo_or_admin_required
def update_case(id):
    claims = get_jwt()
    role   = claims.get("role")
    case   = CaseStudy.query.get_or_404(id)

    if role == "demo" and not case.is_demo:
        return jsonify({"error": "Cannot edit real content"}), 403

    data = request.form

    # ── Cloudinary cleanup for replaced thumbnail ──────────────
    new_thumbnail = data.get("thumbnail")
    if new_thumbnail and new_thumbnail != case.thumbnail and case.thumbnail:
        delete_cloudinary_images([case.thumbnail])

    # ── Cloudinary cleanup for removed content images ──────────
    new_content = data.get("content")
    if new_content and new_content != case.content:
        old_urls = set(extract_content_image_urls(case.content or ""))
        new_urls = set(extract_content_image_urls(new_content))
        removed  = old_urls - new_urls
        if removed:
            delete_cloudinary_images(list(removed))

    case.title           = data.get("title",      case.title)
    case.summary         = data.get("summary",    case.summary)
    case.content         = new_content if new_content is not None else case.content
    case.tech_stack      = data.get("tech_stack", case.tech_stack)
    case.github_url      = data.get("github_url") or None
    case.live_url        = data.get("live_url")   or None
    case.category        = data.get("category")   or None
    case.company_project = data.get("company_project") == "true"
    case.is_published    = data.get("is_published", "true") == "true"
    if new_thumbnail:
        case.thumbnail = new_thumbnail

    db.session.commit()
    return jsonify({"message": "Case Study Updated", "data": serialize_case(case)})


# ── Delete ─────────────────────────────────────────────────────
@case_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
@demo_or_admin_required
def delete_case(id):
    claims = get_jwt()
    role   = claims.get("role")
    case   = CaseStudy.query.get_or_404(id)

    if role == "demo" and not case.is_demo:
        return jsonify({"error": "Cannot delete real content"}), 403

    # ── Delete thumbnail + all content images from Cloudinary ──
    urls_to_delete = collect_all_images_for_record(
        thumbnail=case.thumbnail,
        content=case.content,
    )
    delete_cloudinary_images(urls_to_delete)

    db.session.delete(case)
    db.session.commit()
    return jsonify({"message": "Case Study Deleted"})