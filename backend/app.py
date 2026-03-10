from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
from config import Config
from extensions import db, jwt
from routes import register_routes
import os
import cloudinary

def create_app():

    app = Flask(__name__)
    app.config.from_object(Config)

    # Configure Cloudinary
    cloudinary.config(
        cloud_name=app.config["CLOUDINARY_CLOUD_NAME"],
        api_key=app.config["CLOUDINARY_API_KEY"],
        api_secret=app.config["CLOUDINARY_API_SECRET"]
    )


    # Enable CORS
    CORS(app)

    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)

    # Register routes
    register_routes(app)
    
    @app.route('/health')
    def health():
        return {'status': 'ok'}, 200
    
    # # Serve uploaded images
    # @app.route("/uploads/<path:filename>")
    # def uploaded_file(filename):
    #     return send_from_directory(app.config["UPLOAD_FOLDER"], filename)

    # Error handlers
    @app.errorhandler(404)
    def not_found(e):
        return jsonify({"error": "Resource not found"}), 404

    @app.errorhandler(500)
    def server_error(e):
        return jsonify({"error": "Internal server error"}), 500

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)