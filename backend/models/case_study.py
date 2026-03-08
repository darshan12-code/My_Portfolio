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
