from datetime import datetime,timezone
from extensions import db

class Blog(db.Model):
    __tablename__ = "blog_posts"
    __table_args__ = {"schema": "app_schema"}

    id            = db.Column(db.Integer, primary_key=True)
    title         = db.Column(db.String(200), nullable=False)
    slug          = db.Column(db.String(200), unique=True, nullable=False)
    excerpt       = db.Column(db.Text)
    content       = db.Column(db.Text)
    category      = db.Column(db.String(100))
    content_type  = db.Column(db.String(20), default="rich")
    read_time     = db.Column(db.String(20))
    is_published  = db.Column(db.Boolean, default=True)
    is_demo       = db.Column(db.Boolean, default=False, nullable=False)  # ← new
    created_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc)
    )
    updated_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc)
    )

    def __repr__(self):
        return f"<Blog {self.slug}>"