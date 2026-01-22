from fastapi import APIRouter
from datetime import datetime

from app.firebase import db
from app.models import RegistrationRequest

router = APIRouter(prefix="/registration", tags=["Registration"])

@router.post("/")
def register(data: RegistrationRequest):
    record = data.dict()
    record["created_at"] = datetime.now().isoformat()
    db.collection("registrations").add(record)
    return {"message": "Registration successful"}

