from flask import Blueprint, request, jsonify
from extensions import db
from models import Blog
from flask_jwt_extended import jwt_required, get_jwt
from utils.decorators import admin_required, demo_or_admin_required
from utils.helpers import generate_slug
from utils.cloudinary_helpers import collect_all_images_for_record, delete_cloudinary_images

blog_bp = Blueprint("blogs", __name__, url_prefix="/portfolio/blogs")


def calculate_read_time(text):
    if not text:
        return "1 min read"
    words = len(text.split())
    minutes = max(1, round(words / 200))
    return f"{minutes} min read"


def serialize_blog(blog):
    return {
        "id":           blog.id,
        "title":        blog.title,
        "slug":         blog.slug,
        "excerpt":      blog.excerpt,
        "content":      blog.content,
        "content_type": blog.content_type,
        "category":     blog.category,
        "read_time":    blog.read_time,
        "is_published": blog.is_published,
        "is_demo":      blog.is_demo,
        "created_at":   blog.created_at.isoformat() if blog.created_at else None,
        "updated_at":   blog.updated_at.isoformat() if blog.updated_at else None,
    }


# ── Public: real posts only ────────────────────────────────────
@blog_bp.route("", methods=["GET"])
def get_all():
    page  = request.args.get("page", 1, type=int)
    limit = request.args.get("limit", 10, type=int)
    pagination = (
        Blog.query
        .filter_by(is_published=True, is_demo=False)
        .order_by(Blog.created_at.desc())
        .paginate(page=page, per_page=limit, error_out=False)
    )
    return jsonify({
        "total":        pagination.total,
        "pages":        pagination.pages,
        "current_page": pagination.page,
        "data":         [serialize_blog(b) for b in pagination.items],
    })


# ── Public: real post by slug ──────────────────────────────────
@blog_bp.route("/<slug>", methods=["GET"])
def get_by_slug(slug):
    blog = Blog.query.filter_by(
        slug=slug, is_published=True, is_demo=False
    ).first_or_404()
    return jsonify(serialize_blog(blog))


# ── Demo preview: published demo posts ────────────────────────
@blog_bp.route("/demo-preview", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def demo_preview_all():
    page  = request.args.get("page", 1, type=int)
    limit = request.args.get("limit", 10, type=int)
    pagination = (
        Blog.query
        .filter_by(is_published=True, is_demo=True)
        .order_by(Blog.created_at.desc())
        .paginate(page=page, per_page=limit, error_out=False)
    )
    return jsonify({
        "total":        pagination.total,
        "pages":        pagination.pages,
        "current_page": pagination.page,
        "data":         [serialize_blog(b) for b in pagination.items],
    })


# ── Demo preview: single post by slug ─────────────────────────
@blog_bp.route("/demo-preview/<slug>", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def demo_preview_slug(slug):
    blog = Blog.query.filter_by(slug=slug, is_demo=True).first_or_404()
    return jsonify(serialize_blog(blog))


# ── Admin list ─────────────────────────────────────────────────
# admin → only real (is_demo=False)
# demo  → only demo (is_demo=True)
@blog_bp.route("/admin", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def admin_get_all():
    claims = get_jwt()
    role   = claims.get("role")
    flag   = False if role == "admin" else True
    blogs  = Blog.query.filter_by(is_demo=flag).order_by(Blog.created_at.desc()).all()
    return jsonify({"total": len(blogs), "data": [serialize_blog(b) for b in blogs]})


# ── Create ─────────────────────────────────────────────────────
@blog_bp.route("", methods=["POST"])
@jwt_required()
@demo_or_admin_required
def create_blog():
    claims  = get_jwt()
    role    = claims.get("role")
    data    = request.json

    # ── server-side validation ─────────────────────────────────
    title = (data.get("title") or "").strip()
    if not title:
        return jsonify({"error": "Title is required"}), 400
    if len(title) > 200:
        return jsonify({"error": "Title too long (max 200 chars)"}), 400
    if not (data.get("excerpt") or "").strip():
        return jsonify({"error": "Excerpt is required"}), 400
    if not (data.get("category") or "").strip():
        return jsonify({"error": "Category is required"}), 400

    slug    = generate_slug(title)
    content = data.get("content", "")

    blog = Blog(
        title        = title,
        slug         = slug,
        excerpt      = data.get("excerpt").strip(),
        content      = content,
        category     = data.get("category").strip(),
        content_type = data.get("content_type", "rich"),
        read_time    = calculate_read_time(content),
        is_published = data.get("is_published", True),
        is_demo      = (role == "demo"),
    )
    db.session.add(blog)
    db.session.commit()
    return jsonify({"message": "Blog Created", "data": serialize_blog(blog)}), 201


@blog_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
@demo_or_admin_required
def update_blog(id):
    claims = get_jwt()
    role   = claims.get("role")
    blog   = Blog.query.get_or_404(id)

    if role == "demo" and not blog.is_demo:
        return jsonify({"error": "Cannot edit real content"}), 403

    data  = request.json
    title = (data.get("title") or "").strip()

    # ── server-side validation ─────────────────────────────────
    if "title" in data:
        if not title:
            return jsonify({"error": "Title is required"}), 400
        if len(title) > 200:
            return jsonify({"error": "Title too long (max 200 chars)"}), 400
        blog.title = title
        blog.slug  = generate_slug(title)

    blog.excerpt      = data.get("excerpt",      blog.excerpt)
    blog.content      = data.get("content",      blog.content)
    blog.category     = data.get("category",     blog.category)
    blog.content_type = data.get("content_type", blog.content_type)
    blog.read_time    = calculate_read_time(blog.content)
    blog.is_published = data.get("is_published", blog.is_published)

    db.session.commit()
    return jsonify({"message": "Blog Updated", "data": serialize_blog(blog)})


# ── Delete ─────────────────────────────────────────────────────
@blog_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
@demo_or_admin_required
def delete_blog(id):
    claims = get_jwt()
    role   = claims.get("role")
    blog   = Blog.query.get_or_404(id)

    if role == "demo" and not blog.is_demo:
        return jsonify({"error": "Cannot delete real content"}), 403

    # ── Collect and delete all associated Cloudinary images ────
    # Blogs don't have a thumbnail field but content may have editor-uploaded images
    urls_to_delete = collect_all_images_for_record(
        thumbnail=None,       # blogs have no thumbnail
        content=blog.content,
    )
    delete_cloudinary_images(urls_to_delete)

    db.session.delete(blog)
    db.session.commit()
    return jsonify({"message": "Blog Deleted"})