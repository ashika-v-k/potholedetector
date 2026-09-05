from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from ultralytics import YOLO
import shutil
import os

app = FastAPI()


# -----------------------------
# Serve frontend files
# -----------------------------

app.mount(
    "/static",
    StaticFiles(directory="frontend"),
    name="static"
)


# -----------------------------
# Load YOLO model
# -----------------------------

model = YOLO("backend/models/best.pt")


# -----------------------------
# Upload folder
# -----------------------------

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# -----------------------------
# Home page
# -----------------------------

@app.get("/")
def home():
    return FileResponse("frontend/index.html")


# -----------------------------
# Pothole detection
# -----------------------------

@app.post("/detect")
async def detect(file: UploadFile = File(...)):

    print("Received file:", file.filename)
    print("File type:", file.content_type)

    # Save uploaded image
    filepath = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    print("Image saved:", filepath)

    # Run YOLO
    results = model(filepath)

    # Count detected potholes
    count = len(results[0].boxes)

    print("Potholes detected:", count)

    return {
        "potholes": count
    }