from fastapi import APIRouter
from fastapi.responses import StreamingResponse
import csv
import io

from app.firebase import db
router = APIRouter(prefix="/export", tags=["Export"])

@router.get("/registrations")
def export_registrations():
    docs = db.collection("registrations").stream()
    output = io.StringIO()
    writer = csv.writer(output)

    writer.writerow(["Team Name", "Track", "Members"])
    for doc in docs:
        data = doc.to_dict()
        writer.writerow([data.get("teamName", ""), data.get("track", ""), data.get("members", [])])

    output.seek(0)
    return StreamingResponse(output, media_type="text/csv", headers={"Content-Disposition": "attachment; filename=registrations.csv"})
    
    

