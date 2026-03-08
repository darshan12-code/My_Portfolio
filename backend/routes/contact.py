from flask import Blueprint, request, jsonify
from extensions import db
from models import Message
from services.email_service import send_contact_notification
contact_bp = Blueprint("contact", __name__,
                    url_prefix="/portfolio/contact")


@contact_bp.route("", methods=["POST"])
def contact():
    data = request.json

    if not all(k in data for k in ["name", "email", "message"]):
        return jsonify({"error": "Missing required fields"}), 400

    message = Message(**data)
    db.session.add(message)
    db.session.commit()

    try:
        send_contact_notification(
        data["name"],
        data["email"],
        data.get("subject", "Portfolio Contact"),  # fallback if no subject
        data["message"]
    )
    except Exception as e:
        print(f"Email notification failed: {e}")

    return jsonify({"message": "Message sent successfully"}), 201
# GET ALL
@contact_bp.route("", methods=["GET"])
def get_all():
    page = request.args.get("page", 1, type=int)
    per_page = request.args.get("limit", 5, type=int)

    pagination = Message.query.paginate(page=page, per_page=per_page, error_out=False)

    return jsonify({
        "total": pagination.total,
        "pages": pagination.pages,
        "current_page": pagination.page,
        "data": [{
           "id": c.id,
        "name": c.name,
        "email": c.email,
        "message": c.message
        } for c in pagination.items]
    })
