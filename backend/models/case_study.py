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
    github_url = db.Column(db.Text)
    live_url = db.Column(db.Text)
    is_published = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<CaseStudy {self.slug}>"