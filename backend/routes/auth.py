from flask import Blueprint, request, jsonify
from extensions import db
from models import User
from flask_jwt_extended import create_refresh_token,create_access_token, jwt_required, get_jwt_identity
import bcrypt


auth_bp = Blueprint(
    "auth",
    __name__,
    url_prefix="/portfolio/auth"
)

#REGISTER
@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json

    hashed = bcrypt.hashpw(data["password"].encode("utf-8"),
                           bcrypt.gensalt()
                           )
    user = User(
        name=data["name"],
        email=data["email"],
        password_hash=hashed.decode("utf-8")
    )

    return jsonify({"message": "User registered successfully"}),201

# LOGIN
# LOGIN
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json

    user = User.query.filter_by(email=data["email"]).first()

    if not user:
        return {"error": "Invalid credentials"}, 401

    if not bcrypt.checkpw(
        data["password"].encode("utf-8"),
        user.password_hash.encode("utf-8")
    ):
        return {"error": "Invalid credentials"}, 401

    access_token = create_access_token(
        identity=str(user.id),   # ✅ FIX
        additional_claims={"role": user.role}
    )

    refresh_token = create_refresh_token(
        identity=str(user.id)    # ✅ FIX
    )

    return {
        "access_token": access_token,
        "refresh_token": refresh_token
    }, 200



@auth_bp.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def refresh():
    user_id = get_jwt_identity()

    # fetch user to get role
    user = User.query.get(user_id)
   
    new_access_token = create_access_token(
        identity=str(user.id),
        additional_claims={"role": user.role}
    )

    return {
        "access_token": new_access_token
    }, 200
# GET CURRENT USER
@auth_bp.route("/me", methods=["GET"])
@jwt_required()
def me():
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    print("user: ",user_id, user)
    return jsonify({
        "id": user.id,
        "email": user.email,
        "role": user.role
    })


