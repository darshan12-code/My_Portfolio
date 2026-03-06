from flask import Blueprint, request, jsonify
from extensions import db
from models import CaseStudy
from flask_jwt_extended import jwt_required
from utils.decorators import admin_required
from utils.helpers import generate_slug

case_bp = Blueprint(
    "case_studies",
    __name__,
    url_prefix="/portfolio/case-studies"
)


# SERIALIZER
def serialize_case(case):
    return {
        "id": case.id,
        "title": case.title,
        "slug": case.slug,
        "summary": case.summary,
        "content": case.content,
        "tech_stack": case.tech_stack,
        "github_url": case.github_url,
        "live_url": case.live_url,
        "is_published": case.is_published,
        "created_at": case.created_at.isoformat() if case.created_at else None
    }


# GET ALL (Public)
@case_bp.route("", methods=["GET"])
def get_all():
    page = request.args.get("page", 1, type=int)
    per_page = request.args.get("limit", 10, type=int)

    pagination = CaseStudy.query.filter_by(is_published=True)\
        .order_by(CaseStudy.created_at.desc())\
        .paginate(page=page, per_page=per_page, error_out=False)

    return jsonify({
        "total": pagination.total,
        "pages": pagination.pages,
        "current_page": pagination.page,
        "data": [serialize_case(c) for c in pagination.items]
    })


# GET BY SLUG
@case_bp.route("/<slug>", methods=["GET"])
def get_by_slug(slug):
    case = CaseStudy.query.filter_by(slug=slug, is_published=True).first_or_404()

    return jsonify(serialize_case(case))


# ADMIN GET ALL (includes drafts)
@case_bp.route("/admin", methods=["GET"])
@jwt_required()
@admin_required
def admin_get_all():

    cases = CaseStudy.query.order_by(CaseStudy.created_at.desc()).all()

    return jsonify({
        "data": [serialize_case(c) for c in cases]
    })


# CREATE
@case_bp.route("", methods=["POST"])
@jwt_required()
@admin_required
def create_case():

    data = request.json

    slug = generate_slug(data["title"])

    case = CaseStudy(
        title=data.get("title"),
        slug=slug,
        summary=data.get("summary"),
        content=data.get("content"),
        tech_stack=data.get("tech_stack"),
        github_url=data.get("github_url"),
        live_url=data.get("live_url"),
        is_published=data.get("is_published", True)
    )

    db.session.add(case)
    db.session.commit()

    return jsonify({
        "message": "Case Study Created",
        "data": serialize_case(case)
    }), 201


# UPDATE
@case_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
@admin_required
def update_case(id):

    case = CaseStudy.query.get_or_404(id)
    data = request.json

    if "title" in data:
        case.title = data["title"]
        case.slug = generate_slug(data["title"])

    case.summary = data.get("summary", case.summary)
    case.content = data.get("content", case.content)
    case.tech_stack = data.get("tech_stack", case.tech_stack)
    case.github_url = data.get("github_url", case.github_url)
    case.live_url = data.get("live_url", case.live_url)
    case.is_published = data.get("is_published", case.is_published)

    db.session.commit()

    return jsonify({
        "message": "Case Study Updated",
        "data": serialize_case(case)
    })


# DELETE
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