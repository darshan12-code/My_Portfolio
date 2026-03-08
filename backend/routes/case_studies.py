from flask import Blueprint, request, jsonify
from extensions import db
from models import CaseStudy
from flask_jwt_extended import jwt_required
from utils.decorators import admin_required
from utils.helpers import generate_slug
import json

case_bp = Blueprint(
    "case_studies",
    __name__,
    url_prefix="/portfolio/case-studies"
)
def serialize_case(case):
    return {
        "id": case.id,
        "title": case.title,
        "slug": case.slug,
        "summary": case.summary,
        "content": case.content,
        "tech_stack": case.tech_stack,
        "thumbnail": case.thumbnail,        # ← single URL string, no JSON parsing
        "github_url": case.github_url,
        "live_url": case.live_url,
        "category": case.category,
        "company_project": case.company_project,
        "is_published": case.is_published,
        "created_at": case.created_at.isoformat() if case.created_at else None
    }

def safe_preview_images(value):
    """Always store preview_images as a valid JSON string"""
    if not value:
        return json.dumps([])
    if isinstance(value, list):
        return json.dumps(value)
    if isinstance(value, str):
        try:
            parsed = json.loads(value)
            if isinstance(parsed, list):
                return value  # already valid JSON array string
            return json.dumps([value])
        except:
            return json.dumps([value])
    return json.dumps([])


@case_bp.route("", methods=["GET"])
def get_all():
    cases = CaseStudy.query.filter_by(is_published=True)\
        .order_by(CaseStudy.created_at.desc()).all()

    return jsonify({
        "data": [serialize_case(c) for c in cases]
    })


@case_bp.route("/<slug>", methods=["GET"])
def get_by_slug(slug):
    case = CaseStudy.query.filter_by(
        slug=slug,
        is_published=True
    ).first_or_404()

    return jsonify(serialize_case(case))


@case_bp.route("", methods=["POST"])
@jwt_required()
@admin_required
def create_case():
    try:
        data = request.form
        slug = generate_slug(data["title"])

        existing = CaseStudy.query.filter_by(slug=slug).first()
        if existing:
            import time
            slug = f"{slug}-{int(time.time())}"

        case = CaseStudy(
            title=data.get("title"),
            slug=slug,
            summary=data.get("summary"),
            content=data.get("content"),
            tech_stack=data.get("tech_stack"),
            thumbnail=data.get("thumbnail") or None,   # ← single URL
            github_url=data.get("github_url") or None,
            live_url=data.get("live_url") or None,
            category=data.get("category") or None,
            company_project=data.get("company_project") == "true",
            is_published=data.get("is_published", "true") == "true"
        )

        db.session.add(case)
        db.session.commit()

        return jsonify({"message": "Case Study Created", "data": serialize_case(case)})

    except Exception as e:
        db.session.rollback()
        print("CREATE CASE ERROR:", str(e))
        return jsonify({"error": str(e)}), 500


@case_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
@admin_required
def update_case(id):
    case = CaseStudy.query.get_or_404(id)
    data = request.form

    case.title = data.get("title", case.title)
    case.summary = data.get("summary", case.summary)
    case.content = data.get("content", case.content)
    case.tech_stack = data.get("tech_stack", case.tech_stack)
    case.github_url = data.get("github_url") or None
    case.live_url = data.get("live_url") or None
    case.category = data.get("category") or None
    case.company_project = data.get("company_project") == "true"
    case.is_published = data.get("is_published", "true") == "true"

    new_thumbnail = data.get("thumbnail")
    if new_thumbnail:
        case.thumbnail = new_thumbnail

    db.session.commit()
    return jsonify({"message": "Case Study Updated", "data": serialize_case(case)})

# In your case_studies route
@case_bp.route("/featured", methods=["GET"])
def get_featured():
    cases = CaseStudy.query.filter_by(is_featured=True)\
                .order_by(CaseStudy.created_at.desc())\
                .limit(4).all()

    return jsonify({
        "data": [s.to_dict() for s in cases]
    })
@case_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
@admin_required
def delete_case(id):
    case = CaseStudy.query.get_or_404(id)

    db.session.delete(case)
    db.session.commit()

    return jsonify({
        "message": "Case Study Deleted"
    })