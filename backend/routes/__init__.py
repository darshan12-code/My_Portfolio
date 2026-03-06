from .auth import auth_bp
from .case_studies import case_bp
from .blogs import blog_bp
from .contact import contact_bp

def register_routes(app):
    app.register_blueprint(auth_bp)
    app.register_blueprint(case_bp)
    app.register_blueprint(blog_bp)
    app.register_blueprint(contact_bp)