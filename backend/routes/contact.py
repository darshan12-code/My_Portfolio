from flask import Blueprint, request, jsonify
from extensions import db
from models import Message

contact_bp = Blueprint("contact", __name__,
                    url_prefix="/portfolio/contact")



@contact_bp.route("", methods=["POST"])
def contact():
    data = request.json

    message = Message(**data)
    db.session.add(message)
    db.session.commit()

    return jsonify({"message": "Message sent"}), 201

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
