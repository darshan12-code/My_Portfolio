from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from extensions import db, jwt
from routes import register_routes


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Enable CORS
    CORS(app)

    # Initialize Extensions
    db.init_app(app)
    jwt.init_app(app)

    # Register All Blueprints
    register_routes(app)

    # Global Error Handlers
    @app.errorhandler(404)
    def not_found(e):
        return jsonify({"error": "Resource not found"}), 404

    @app.errorhandler(500)
    def server_error(e):
        return jsonify({"error": "Internal server error"}), 500

    # Create Tables (only for development)
    # with app.app_context():
    #     db.create_all()

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)