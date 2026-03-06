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