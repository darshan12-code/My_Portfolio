from flask import Blueprint, request, jsonify
from extensions import db
from models import Blog
from flask_jwt_extended import jwt_required
from utils.decorators import admin_required
from utils.helpers import generate_slug

blog_bp = Blueprint(
    "blogs",
    __name__,
    url_prefix="/portfolio/blogs"
)
def calculate_read_time(text):
    if not text:
        return "1 min read"

    words = len(text.split())
    minutes = max(1, round(words / 200))
    return f"{minutes} min read"
# SERIALIZER
def serialize_blog(blog):
    return {
        "id": blog.id,
        "title": blog.title,
        "slug": blog.slug,
        "excerpt": blog.excerpt,
        "content": blog.content,
        "content_type": blog.content_type,
        "category": blog.category,
        "read_time": blog.read_time,
        "is_published": blog.is_published,
        "created_at": blog.created_at.isoformat() if blog.created_at else None,
        "updated_at": blog.updated_at.isoformat() if blog.updated_at else None
    }

# GET ALL (Public)
@blog_bp.route("", methods=["GET"])
def get_all():

    page = request.args.get("page", 1, type=int)
    limit = request.args.get("limit", 10, type=int)

    pagination = (
        Blog.query
        .filter_by(is_published=True)
        .order_by(Blog.created_at.desc())
        .paginate(page=page, per_page=limit, error_out=False)
    )

    return jsonify({
        "total": pagination.total,
        "pages": pagination.pages,
        "current_page": pagination.page,
        "data": [serialize_blog(b) for b in pagination.items]
    })

# GET BY SLUG
@blog_bp.route("/<slug>", methods=["GET"])
def get_by_slug(slug):

    blog = Blog.query.filter_by(slug=slug, is_published=True).first_or_404()

    return jsonify(serialize_blog(blog))


# ADMIN GET ALL (includes drafts)
@blog_bp.route("/admin", methods=["GET"])
@jwt_required()
@admin_required
def admin_get_all():

    blogs = Blog.query.order_by(Blog.created_at.desc()).all()

    return jsonify({
        "total": len(blogs),
        "data": [serialize_blog(b) for b in blogs]
    })

# CREATE (ADMIN)
@blog_bp.route("", methods=["POST"])
@jwt_required()
@admin_required
def create_blog():

    data = request.json

    slug = generate_slug(data["title"])

    content = data.get("content", "")

    blog = Blog(
        title=data.get("title"),
        slug=slug,
        excerpt=data.get("excerpt"),
        content=content,
        category=data.get("category"),
        content_type=data.get("content_type", "rich"),
        read_time=calculate_read_time(content),
        is_published=data.get("is_published", True)
    )

    db.session.add(blog)
    db.session.commit()

    return jsonify({
        "message": "Blog Created",
        "data": serialize_blog(blog)
    }), 201


# UPDATE
@blog_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
@admin_required
def update_blog(id):

    blog = Blog.query.get_or_404(id)
    data = request.json

    if "title" in data:
        blog.title = data["title"]
        blog.slug = generate_slug(data["title"])

    blog.excerpt = data.get("excerpt", blog.excerpt)
    blog.content = data.get("content", blog.content)
    blog.category = data.get("category", blog.category)
    blog.content_type = data.get("content_type", blog.content_type)
    blog.read_time = calculate_read_time(blog.content)
    blog.is_published = data.get("is_published", blog.is_published)

    if blog.content:
        blog.read_time = calculate_read_time(blog.content)
    elif blog.html_content:
        blog.read_time = calculate_read_time(blog.html_content)

    blog.is_published = data.get("is_published", blog.is_published)

    db.session.commit()

    return jsonify({
        "message": "Blog Updated",
        "data": serialize_blog(blog)
    })

# DELETE
@blog_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
@admin_required
def delete_blog(id):

    blog = Blog.query.get_or_404(id)

    db.session.delete(blog)
    db.session.commit()

    return jsonify({
        "message": "Blog Deleted"
    })