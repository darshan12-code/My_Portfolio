## Project Structure

Folder PATH listing for volume Data
Volume serial number is F8CC-00EB
D:.
|   .env
|   app.py
|   config.py
|   extensions.py
|   Procfile
|   project_structure.md
|   requirements.txt
|   runtime.txt
|   
+---data
|       portfolio_data.json
|       
+---models
|   |   blog.py
|   |   case_study.py
|   |   message.py
|   |   user.py
|   |   __init__.py
|   |   
+---routes
|   |   auth.py
|   |   blogs.py
|   |   case_studies.py
|   |   contact.py
|   |   information.py
|   |   upload.py
|   |   __init__.py
|   |   
+---services
|   |   email_service.py
|   |   seed.py
|   |   
+---uploads
+---utils
|   |   decorators.py
|   |   helpers.py
|   |   

## File Contents


### data\portfolio_data.json

```
{
  "personalInfo": {
    "name": "Darshan",
    "lastName": "Agrawal",
    "roles": [
      "Full Stack Engineer",
      "React + Python Developer",
      "Remote-First Builder"
    ],
    "bio": "Full Stack Engineer with 4+ years building performant, data-driven web apps. I specialize in React ecosystems and Python backends - from real-time KPI dashboards to automated data pipelines - with a sharp eye for clean code and intuitive design.",
    "email": "darshanagrawal007@gmail.com",
    "location": "India (Remote Worldwide)",
    "resumeUrl": "/resume.pdf",
    "socials": {
      "github": "https://github.com/darshan12-code/",
      "linkedin": "https://www.linkedin.com/in/darshan-agrawal-012/",
      "twitter": "https://twitter.com"
    }
  },

  "navLinks": [
    { "label": "Home", "path": "/" },
    { "label": "Case Studies", "path": "/case-studies" },
    { "label": "Blog", "path": "/blog" },
    { "label": "Contact", "path": "/contact" }
  ],

  "skills": [
    { "name": "React.js", "icon": "SiReact" },
    { "name": "TypeScript", "icon": "SiTypescript" },
    { "name": "JavaScript", "icon": "SiJavascript" },
    { "name": "Python", "icon": "SiPython" },
    { "name": "Flask", "icon": "SiFlask" },
    { "name": "Node.js", "icon": "SiNodedotjs" },
    { "name": "Express.js", "icon": "SiExpress" },
    { "name": "Angular", "icon": "SiAngular" },
    { "name": "GraphQL", "icon": "SiGraphql" },
    { "name": "D3.js", "icon": "SiD3Dotjs" },
    { "name": "SCSS", "icon": "SiSass" },
    { "name": "PostgreSQL", "icon": "SiPostgresql" },
    { "name": "MySQL", "icon": "SiMysql" },
    { "name": "MongoDB", "icon": "SiMongodb" },
    { "name": "Azure Databricks", "icon": "SiDatabricks" },
    { "name": "Azure Data Factory", "icon": "SiMicrosoftazure" },
    { "name": "Docker", "icon": "SiDocker" },
    { "name": "Git", "icon": "SiGit" },
    { "name": "Jira", "icon": "SiJira" },
    { "name": "Pandas", "icon": "SiPandas" }
  ],

  "experience": [
    {
      "id": 1,
      "role": "Full Stack Engineer",
      "company": "Rhombuz",
      "location": "Remote — Seattle, USA",
      "period": "Feb 2023 – Present",
      "description": "Led full-stack delivery of a real-time KPI dashboard visualizing 26 metrics with D3.js graphs. Automated telecom data workflows processing 16+ public records, cutting PDF processing time by 70%. Optimized API performance, reduced query latency, and mentored junior developers.",
      "tech": [
        "React",
        "Python",
        "Flask",
        "Azure Databricks",
        "Azure Data Factory",
        "D3.js",
        "PostgreSQL",
        "MySQL"
      ]
    },
    {
      "id": 2,
      "role": "Frontend Engineer",
      "company": "Rhombuz",
      "location": "Remote — Seattle, USA",
      "period": "Dec 2021 – Jan 2023",
      "description": "Reduced dashboard load times by 45% through architecture optimization and code splitting. Redesigned UI components for cross-platform compatibility. Delivered 3+ key frontend projects and improved feature rollout speed by 30%.",
      "tech": [
        "React",
        "TypeScript",
        "Angular",
        "SCSS",
        "D3.js",
        "GraphQL"
      ]
    },
    {
      "id": 3,
      "role": "System Engineer Intern",
      "company": "Western Coalfields Ltd.",
      "location": "Chandrapur, India",
      "period": "Jun 2021 – Sep 2021",
      "description": "Built a full-stack PHP tool to monitor equipment breakdown and system status for the GM Office, digitizing manual paper-based workflows.",
      "tech": ["PHP", "MySQL"]
    }
  ],

  "counters": [
    { "value": 4, "suffix": "+", "label": "Years Experience" },
    { "value": 45, "suffix": "%", "label": "Load Time Reduced" },
    { "value": 8, "suffix": "+", "label": "Projects Delivered" },
    { "value": 70, "suffix": "%", "label": "Faster PDF Processing" }
  ],

  "aboutTraits": [
    {
      "emoji": "🎨",
      "label": "Creative",
      "description": "Clay, paint & digital art — design thinking runs deep."
    },
    {
      "emoji": "🧠",
      "label": "Strategic",
      "description": "Architecture first, syntax second. Systems that scale."
    },
    {
      "emoji": "🛠",
      "label": "Builder",
      "description": "Ship fast, iterate faster."
    }
  ],

  "filterCategories": [
    { "key": "all", "label": "All" },
    { "key": "fullstack", "label": "Full Stack" },
    { "key": "frontend", "label": "Frontend" },
    { "key": "backend", "label": "Backend" }
  ]
}
```


### models\blog.py

```
from datetime import datetime
from extensions import db
class Blog(db.Model):
    __tablename__ = "blog_posts"
    __table_args__ = {"schema": "app_schema"}

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(200), nullable=False)
    slug = db.Column(db.String(200), unique=True, nullable=False)

    excerpt = db.Column(db.Text)

    # MAIN CONTENT
    content = db.Column(db.Text)   # TipTap HTML stored here

    category = db.Column(db.String(100))
    content_type = db.Column(db.String(20), default="rich")

    read_time = db.Column(db.String(20))

    is_published = db.Column(db.Boolean, default=True)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Blog {self.slug}>"
```


### models\case_study.py

```
from datetime import datetime
from extensions import db

class CaseStudy(db.Model):
    __tablename__ = "case_studies"
    __table_args__ = {"schema": "app_schema"}

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(200), nullable=False)
    slug = db.Column(db.String(200), unique=True, nullable=False)

    summary = db.Column(db.Text)
    content = db.Column(db.Text)

    tech_stack = db.Column(db.Text)

    thumbnail = db.Column(db.Text) 

    github_url = db.Column(db.Text)
    live_url = db.Column(db.Text)

    category = db.Column(db.String(50))
    company_project = db.Column(db.Boolean, default=False)
    # In your CaseStudy model
    is_featured = db.Column(db.Boolean, default=False, nullable=False)
    is_published = db.Column(db.Boolean, default=True)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "slug": self.slug,
            "summary": self.summary,
            "content": self.content,
            "techStack": self.tech_stack,
            "thumbnail": self.thumbnail,
            "githubUrl": self.github_url,
            "liveUrl": self.live_url,
            "category": self.category,
            "companyProject": self.company_project,
            "isFeatured": self.is_featured,
            "isPublished": self.is_published,
            "createdAt": self.created_at.isoformat() if self.created_at else None,
        }

    def __repr__(self):
        return f"<CaseStudy {self.slug}>"
```


### models\message.py

```
from datetime import datetime
from extensions import db

class Message(db.Model):
    __tablename__ = "messages"
    __table_args__ = {"schema": "app_schema"}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(150))
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Message {self.email}>"
```


### models\user.py

```
from datetime import datetime
from extensions import db

class User(db.Model):
    __tablename__ = "users"
    __table_args__ = {"schema": "app_schema"}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password_hash = db.Column(db.Text, nullable=False)
    role = db.Column(db.String(20), default="admin")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<User {self.email}>"
```


### models\__init__.py

```
from .user import User
from .case_study import CaseStudy
from .blog import Blog
from .message import Message
```


### routes\auth.py

```
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
    hashed = bcrypt.hashpw(data["password"].encode("utf-8"), bcrypt.gensalt())

    print(hashed.decode())
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


```


### routes\blogs.py

```
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
```


### routes\case_studies.py

```
from flask import Blueprint, request, jsonify
from extensions import db
from models import CaseStudy
from flask_jwt_extended import jwt_required
from utils.decorators import admin_required
from utils.helpers import generate_slug
import json

case_bp = Blueprint(
    "case_studies",
    __name__,
    url_prefix="/portfolio/case-studies"
)
def serialize_case(case):
    return {
        "id": case.id,
        "title": case.title,
        "slug": case.slug,
        "summary": case.summary,
        "content": case.content,
        "tech_stack": case.tech_stack,
        "thumbnail": case.thumbnail,        # ← single URL string, no JSON parsing
        "github_url": case.github_url,
        "live_url": case.live_url,
        "category": case.category,
        "company_project": case.company_project,
        "is_published": case.is_published,
        "created_at": case.created_at.isoformat() if case.created_at else None
    }

def safe_preview_images(value):
    """Always store preview_images as a valid JSON string"""
    if not value:
        return json.dumps([])
    if isinstance(value, list):
        return json.dumps(value)
    if isinstance(value, str):
        try:
            parsed = json.loads(value)
            if isinstance(parsed, list):
                return value  # already valid JSON array string
            return json.dumps([value])
        except:
            return json.dumps([value])
    return json.dumps([])


@case_bp.route("", methods=["GET"])
def get_all():
    cases = CaseStudy.query.filter_by(is_published=True)\
        .order_by(CaseStudy.created_at.desc()).all()

    return jsonify({
        "data": [serialize_case(c) for c in cases]
    })


@case_bp.route("/<slug>", methods=["GET"])
def get_by_slug(slug):
    case = CaseStudy.query.filter_by(
        slug=slug,
        is_published=True
    ).first_or_404()

    return jsonify(serialize_case(case))


@case_bp.route("", methods=["POST"])
@jwt_required()
@admin_required
def create_case():
    try:
        data = request.form
        slug = generate_slug(data["title"])

        existing = CaseStudy.query.filter_by(slug=slug).first()
        if existing:
            import time
            slug = f"{slug}-{int(time.time())}"

        case = CaseStudy(
            title=data.get("title"),
            slug=slug,
            summary=data.get("summary"),
            content=data.get("content"),
            tech_stack=data.get("tech_stack"),
            thumbnail=data.get("thumbnail") or None,   # ← single URL
            github_url=data.get("github_url") or None,
            live_url=data.get("live_url") or None,
            category=data.get("category") or None,
            company_project=data.get("company_project") == "true",
            is_published=data.get("is_published", "true") == "true"
        )

        db.session.add(case)
        db.session.commit()

        return jsonify({"message": "Case Study Created", "data": serialize_case(case)})

    except Exception as e:
        db.session.rollback()
        print("CREATE CASE ERROR:", str(e))
        return jsonify({"error": str(e)}), 500


@case_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
@admin_required
def update_case(id):
    case = CaseStudy.query.get_or_404(id)
    data = request.form

    case.title = data.get("title", case.title)
    case.summary = data.get("summary", case.summary)
    case.content = data.get("content", case.content)
    case.tech_stack = data.get("tech_stack", case.tech_stack)
    case.github_url = data.get("github_url") or None
    case.live_url = data.get("live_url") or None
    case.category = data.get("category") or None
    case.company_project = data.get("company_project") == "true"
    case.is_published = data.get("is_published", "true") == "true"

    new_thumbnail = data.get("thumbnail")
    if new_thumbnail:
        case.thumbnail = new_thumbnail

    db.session.commit()
    return jsonify({"message": "Case Study Updated", "data": serialize_case(case)})

# In your case_studies route
@case_bp.route("/featured", methods=["GET"])
def get_featured():
    cases = CaseStudy.query.filter_by(is_featured=True)\
                .order_by(CaseStudy.created_at.desc())\
                .limit(4).all()

    return jsonify({
        "data": [s.to_dict() for s in cases]
    })
@case_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
@admin_required
def delete_case(id):
    case = CaseStudy.query.get_or_404(id)

    db.session.delete(case)
    db.session.commit()

    return jsonify({
        "message": "Case Study Deleted"
    })
```


### routes\contact.py

```
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
        "message": c.message,
        "created_at":c.created_at
        } for c in pagination.items]
    })
```


### routes\information.py

```
from flask import Blueprint, jsonify
import json
import os

portfolio_bp = Blueprint(
    "portfolio",
    __name__,
    url_prefix="/portfolio/portfolio-data"
)
@portfolio_bp.route("/data", methods=["GET"])
def get_portfolio_data():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path, "r") as f:
        data = json.load(f)

    return jsonify(data)

@portfolio_bp.route("/personalInfo", methods=["GET"])
def get_personalInfo():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path) as f:
        data = json.load(f)

    return jsonify(data["personalInfo"])

@portfolio_bp.route("/experience", methods=["GET"])
def get_experience():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path) as f:
        data = json.load(f)

    return jsonify(data["experience"])
@portfolio_bp.route("/counters", methods=["GET"])
def get_counters():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path) as f:
        data = json.load(f)

    return jsonify(data["counters"])
# @portfolio_bp.route("/aboutTraits", methods=["GET"])
# def get_aboutTraits():
#     file_path = os.path.join("data", "portfolio_data.json")

#     with open(file_path) as f:
#         data = json.load(f)

#     return jsonify(data["aboutTraits"])
@portfolio_bp.route("/skills", methods=["GET"])
def get_skills():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path) as f:
        data = json.load(f)

    return jsonify(data["skills"])
```


### routes\upload.py

```
import cloudinary
import cloudinary.uploader
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from utils.decorators import admin_required

upload_bp = Blueprint("upload", __name__, url_prefix="/portfolio")

ALLOWED_IMAGES = {"png", "jpg", "jpeg", "gif", "webp", "svg"}
ALLOWED_VIDEOS = {"mp4", "mov", "avi", "webm"}

def allowed_file(filename, allowed):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in allowed

@upload_bp.route("/upload", methods=["POST"])
@jwt_required()
@admin_required
def upload_media():
    uploaded_urls = []

    # Handle images
    if "images" in request.files:
        for file in request.files.getlist("images"):
            if allowed_file(file.filename, ALLOWED_IMAGES):
                result = cloudinary.uploader.upload(
                    file,
                    folder="portfolio/content",
                    resource_type="image"
                )
                uploaded_urls.append({
                    "url": result["secure_url"],
                    "type": "image"
                })

    # Handle videos
    if "videos" in request.files:
        for file in request.files.getlist("videos"):
            if allowed_file(file.filename, ALLOWED_VIDEOS):
                result = cloudinary.uploader.upload(
                    file,
                    folder="portfolio/content",
                    resource_type="video"  # ← video resource type
                )
                uploaded_urls.append({
                    "url": result["secure_url"],
                    "type": "video"
                })

    if not uploaded_urls:
        return jsonify({"error": "No valid files provided"}), 400

    return jsonify({
        "success": True,
        "files": uploaded_urls
    }), 200
```


### routes\__init__.py

```
from .auth import auth_bp
from .case_studies import case_bp
from .blogs import blog_bp
from .contact import contact_bp
from .upload import upload_bp 
from .information import portfolio_bp 
def register_routes(app):
    app.register_blueprint(auth_bp)
    app.register_blueprint(case_bp)
    app.register_blueprint(blog_bp)
    app.register_blueprint(contact_bp)
    app.register_blueprint(upload_bp)
    app.register_blueprint(portfolio_bp)    
```


### services\email_service.py

```
import resend
import os
from datetime import datetime

resend.api_key = os.environ.get("RESEND_API_KEY")

RECEIVER_EMAIL = os.environ.get("CONTACT_RECEIVER_EMAIL")
SENDER_EMAIL = os.environ.get("CONTACT_SENDER_EMAIL", "onboarding@resend.dev")


def send_contact_notification(name, email, subject, message):
    """Send notification to you when someone contacts you."""
    html = build_notification_email(name, email, subject, message)

    params = {
        "from": f"Portfolio Contact <{SENDER_EMAIL}>",
        "to": [RECEIVER_EMAIL],
        "subject": f"📬 New Contact: {subject}",
        "html": html,
    }

    response = resend.Emails.send(params)
    return response


def build_notification_email(name, email, subject, message):
    timestamp = datetime.now().strftime("%B %d, %Y at %I:%M %p")
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background-color:#0f0f0f;font-family:'Segoe UI',Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f0f;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:40px;border-radius:16px 16px 0 0;text-align:center;">
                  <p style="margin:0 0 8px 0;color:rgba(255,255,255,0.7);font-size:13px;letter-spacing:3px;text-transform:uppercase;">Portfolio Contact Form</p>
                  <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">Someone reached out! 👋</h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="background-color:#1a1a1a;padding:40px;border-radius:0 0 16px 16px;">

                  <!-- Sender Info -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:30px;">
                    <tr>
                      <td style="background-color:#252525;border-radius:12px;padding:24px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-bottom:16px;border-bottom:1px solid #333;">
                              <p style="margin:0 0 4px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">From</p>
                              <p style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">{name}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top:16px;padding-bottom:16px;border-bottom:1px solid #333;">
                              <p style="margin:0 0 4px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
                              <a href="mailto:{email}" style="color:#6366f1;font-size:15px;text-decoration:none;">{email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top:16px;padding-bottom:16px;border-bottom:1px solid #333;">
                              <p style="margin:0 0 4px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Subject</p>
                              <p style="margin:0;color:#ffffff;font-size:15px;">{subject}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top:16px;">
                              <p style="margin:0 0 4px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Received</p>
                              <p style="margin:0;color:#ffffff;font-size:15px;">{timestamp}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Message -->
                  <p style="margin:0 0 12px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Message</p>
                  <div style="background-color:#252525;border-left:4px solid #6366f1;border-radius:0 12px 12px 0;padding:24px;margin-bottom:30px;">
                    <p style="margin:0;color:#e0e0e0;font-size:15px;line-height:1.8;">{message}</p>
                  </div>

                  <!-- Reply Button -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center">
                        <a href="mailto:{email}?subject=Re: {subject}"
                           style="display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#ffffff;text-decoration:none;padding:14px 40px;border-radius:8px;font-size:15px;font-weight:600;letter-spacing:0.5px;">
                          Reply to {name}
                        </a>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:24px;text-align:center;">
                  <p style="margin:0;color:#555;font-size:12px;">Sent via your portfolio contact form</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    """
```


### services\seed.py

```
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
```


### utils\decorators.py

```
from functools import wraps
from flask import jsonify
from flask_jwt_extended import get_jwt
from flask_jwt_extended import verify_jwt_in_request


def admin_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()
        claims = get_jwt()

        if claims.get("role") != "admin":
            return jsonify({"error": "Admin access required"}), 403

        return fn(*args, **kwargs)

    return wrapper

```


### utils\helpers.py

```
import re


def generate_slug(title):
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    return slug.strip("-")
```


### .env

```
# DATABASE_URL=postgresql://postgres:1234@localhost:5432/portfolio_db
DATABASE_URL=postgresql://postgres.tkzejgpedeycvlopdoqy:Portfolio2024Dx@aws-1-ap-south-1.pooler.supabase.com:6543/postgres
# DATABASE_URL=postgresql://postgres:Portfolio2024Dx@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
SECRET_KEY=supersecretkey
FLASK_ENV=development


CLOUDINARY_CLOUD_NAME=dsihbznoc
CLOUDINARY_API_KEY=111695531584429
CLOUDINARY_API_SECRET=IiYLmYnj77mVQ9lbsC0kSIpxgrE

CONTACT_SENDER_EMAIL=onboarding@resend.dev
CONTACT_RECEIVER_EMAIL=darshanagrawal007@gmail.com
RESEND_API_KEY=re_jifFrKiA_BRg4PfDifsZ8jVgzDBVMG9Kg
```


### app.py

```
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
```


### config.py

```
import os
from dotenv import load_dotenv

load_dotenv()

from datetime import timedelta

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CLOUDINARY_CLOUD_NAME = os.environ.get("CLOUDINARY_CLOUD_NAME")
    CLOUDINARY_API_KEY = os.environ.get("CLOUDINARY_API_KEY")
    CLOUDINARY_API_SECRET = os.environ.get("CLOUDINARY_API_SECRET")
    JWT_SECRET_KEY = os.getenv("SECRET_KEY")

    JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=15)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=7)
```


### extensions.py

```
# extensions.py
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
jwt = JWTManager()
```


### Procfile

```
web: gunicorn app:app --workers 2 --bind 0.0.0.0:$PORT
```


### requirements.txt

```
bcrypt==5.0.0
blinker==1.9.0
certifi==2026.2.25
charset-normalizer==3.4.5
click==8.3.1
cloudinary==1.44.1
colorama==0.4.6
Flask==3.1.3
flask-cors==6.0.2
Flask-JWT-Extended==4.7.1
Flask-SQLAlchemy==3.1.1
greenlet==3.3.2
gunicorn==25.1.0
idna==3.11
itsdangerous==2.2.0
Jinja2==3.1.6
MarkupSafe==3.0.3
packaging==26.0
psycopg2-binary==2.9.11
PyJWT==2.11.0
python-dotenv==1.2.2
requests==2.32.5
resend==2.23.0
six==1.17.0
SQLAlchemy==2.0.47
typing_extensions==4.15.0
urllib3==2.6.3
Werkzeug==3.1.6
```


### runtime.txt

```
python-3.11.0
```

