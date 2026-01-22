from typing import List
from pydantic import BaseModel, EmailStr

class Member(BaseModel):
    name: str
    registerNumber: str
    year: str
    college: str
    email: EmailStr
    phoneNumber: str

class RegistrationRequest(BaseModel):
    teamName: str
    track: str
    members: List[Member]