from flask import Blueprint, request, jsonify
from extensions import db
from models import Message
from flask_jwt_extended import jwt_required, get_jwt
from utils.decorators import demo_or_admin_required
from services.email_service import send_contact_notification

contact_bp = Blueprint("contact", __name__, url_prefix="/portfolio/contact")


@contact_bp.route("", methods=["POST"])
def contact():
    data = request.json
    if not all(k in data for k in ["name", "email", "message"]):
        return jsonify({"error": "Missing required fields"}), 400

    message = Message(
        name    = data["name"],
        email   = data["email"],
        message = data["message"],
        is_demo = False,
    )
    db.session.add(message)
    db.session.commit()

    try:
        send_contact_notification(
            data["name"], data["email"],
            data.get("subject", "Portfolio Contact"),
            data["message"],
        )
    except Exception as e:
        print(f"Email notification failed: {e}")

    return jsonify({"message": "Message sent successfully"}), 201


@contact_bp.route("", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def get_all():
    claims   = get_jwt()
    role     = claims.get("role")
    page     = request.args.get("page", 1, type=int)
    per_page = request.args.get("limit", 5, type=int)

    # admin → real messages only (is_demo=False)
    # demo  → demo messages only (is_demo=True)
    flag  = False if role == "admin" else True
    query = Message.query.filter_by(is_demo=flag)

    pagination = query.order_by(Message.created_at.desc()).paginate(
        page=page, per_page=per_page, error_out=False
    )
    return jsonify({
        "total":        pagination.total,
        "pages":        pagination.pages,
        "current_page": pagination.page,
        "data": [{
            "id":         c.id,
            "name":       c.name,
            "email":      c.email,
            "message":    c.message,
            "created_at": c.created_at.isoformat() if c.created_at else None,
        } for c in pagination.items],
    })