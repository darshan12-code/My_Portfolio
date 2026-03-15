from datetime import datetime,timezone
from extensions import db

class Message(db.Model):
    __tablename__ = "messages"
    __table_args__ = {"schema": "app_schema"}

    id         = db.Column(db.Integer, primary_key=True)
    name       = db.Column(db.String(100))
    email      = db.Column(db.String(150))
    message    = db.Column(db.Text, nullable=False)
    is_demo    = db.Column(db.Boolean, default=False, nullable=False)  # ← new
    created_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc)  # ← timezone-aware
    )

    def __repr__(self):
        return f"<Message {self.email}>"