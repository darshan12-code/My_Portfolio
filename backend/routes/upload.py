import cloudinary
import cloudinary.uploader
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt
from utils.decorators import demo_or_admin_required

upload_bp = Blueprint("upload", __name__, url_prefix="/portfolio")

ALLOWED_IMAGES = {"png", "jpg", "jpeg", "gif", "webp", "svg"}
ALLOWED_VIDEOS = {"mp4", "mov", "avi", "webm"}


def allowed_file(filename, allowed):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in allowed


@upload_bp.route("/upload", methods=["POST"])
@jwt_required()
@demo_or_admin_required
def upload_media():
    claims = get_jwt()
    role   = claims.get("role")
    # demo uploads go to a separate Cloudinary folder — keeps your real media clean
    folder = "portfolio/demo-content" if role == "demo" else "portfolio/content"

    uploaded_urls = []

    if "images" in request.files:
        for file in request.files.getlist("images"):
            if allowed_file(file.filename, ALLOWED_IMAGES):
                result = cloudinary.uploader.upload(
                    file, folder=folder, resource_type="image"
                )
                uploaded_urls.append({"url": result["secure_url"], "type": "image"})

    if "videos" in request.files:
        for file in request.files.getlist("videos"):
            if allowed_file(file.filename, ALLOWED_VIDEOS):
                result = cloudinary.uploader.upload(
                    file, folder=folder, resource_type="video"
                )
                uploaded_urls.append({"url": result["secure_url"], "type": "video"})

    if not uploaded_urls:
        return jsonify({"error": "No valid files provided"}), 400

    return jsonify({"success": True, "files": uploaded_urls}), 200