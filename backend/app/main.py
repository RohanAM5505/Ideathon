from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import registration, export

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(registration.router)
app.include_router(export.router)

@app.get("/")
def health_check():
    return {"status": "running"}
    