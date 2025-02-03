from sqlalchemy.orm import Session
from .database import SessionLocal, engine
from .models import User
from .auth import get_password_hash

def create_first_user():
    db = SessionLocal()
    user = User(
        username="admin",
        email="admin@example.com",
        hashed_password=get_password_hash("admin123"),
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    db.close()

if __name__ == "__main__":
    create_first_user()