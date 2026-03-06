# from app import create_app
# from extensions import db
# from models import User, CaseStudy, Blog
# import bcrypt

# app = create_app()

# with app.app_context():

#     # Create Admin
#     hashed = bcrypt.hashpw("admin123".encode("utf-8"), bcrypt.gensalt())

#     admin = User(
#         name="Darshan",
#         email="admin@test.com",
#         password_hash=hashed.decode("utf-8"),
#         role="admin"
#     )

#     db.session.add(admin)

#     # Dummy Case Studies
#     for i in range(1, 6):
#         case = CaseStudy(
#             title=f"Project {i}",
#             slug=f"project-{i}",
#             summary="Sample summary",
#             content="Full content here",
#             tech_stack="React, Flask",
#             is_published=True
#         )
#         db.session.add(case)

#     db.session.commit()

# print("Dummy data added.")

from app import create_app
from extensions import db
from models import CaseStudy, Blog, Message
from utils.helpers import generate_slug

app = create_app()

with app.app_context():

    # -------- CASE STUDIES --------
    case_titles = [
        "React Dashboard Analytics",
        "E-commerce MERN Platform",
        "AI Resume Screening System",
        "Real-Time Chat Application",
        "Portfolio SaaS Builder"
    ]

    for title in case_titles:
        case = CaseStudy(
            title=title,
            slug=generate_slug(title),
            summary="This is a sample summary for " + title,
            content="Detailed content about " + title,
            tech_stack="React, Flask, PostgreSQL",
            github_url="https://github.com/example",
            live_url="https://example.com",
            is_published=True
        )
        db.session.add(case)

    # -------- BLOG POSTS --------
    blog_titles = [
        "Understanding JWT Authentication",
        "Scaling Flask Applications",
        "React Performance Optimization",
        "Database Indexing Explained",
        "Building Secure REST APIs"
    ]

    for title in blog_titles:
        blog = Blog(
            title=title,
            slug=generate_slug(title),
            excerpt="Short excerpt for " + title,
            content="Full blog content about " + title,
            is_published=True
        )
        db.session.add(blog)

    # -------- CONTACT MESSAGES --------
    contacts = [
        {"name": "Amit", "email": "amit@test.com", "message": "Interested in collaboration."},
        {"name": "Sneha", "email": "sneha@test.com", "message": "Loved your portfolio!"},
        {"name": "Rohan", "email": "rohan@test.com", "message": "Can we schedule a call?"}
    ]

    for c in contacts:
        message = Message(
            name=c["name"],
            email=c["email"],
            message=c["message"]
        )
        db.session.add(message)

    db.session.commit()

print("Dummy data inserted successfully.")