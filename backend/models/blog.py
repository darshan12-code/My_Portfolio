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