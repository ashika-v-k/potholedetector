from fastapi import FastAPI, UploadFile, File
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from ultralytics import YOLO

import shutil
import os
import uuid
import cv2


app = FastAPI()


# ==========================================
# FRONTEND
# ==========================================

app.mount(
    "/static",
    StaticFiles(directory="frontend"),
    name="static"
)


@app.get("/")
def home():
    return FileResponse("frontend/index.html")


# ==========================================
# UPLOADS / DETECTED IMAGES
# ==========================================

UPLOAD_FOLDER = "uploads"

os.makedirs(
    UPLOAD_FOLDER,
    exist_ok=True
)

app.mount(
    "/uploads",
    StaticFiles(directory=UPLOAD_FOLDER),
    name="uploads"
)


# ==========================================
# YOLO MODEL
# ==========================================

model = YOLO("backend/models/best.pt")


# ==========================================
# DETECTION
# ==========================================

@app.post("/detect")
async def detect(
    file: UploadFile = File(...)
):

    # Create a unique filename
    extension = os.path.splitext(file.filename)[1]

    filename = f"{uuid.uuid4()}{extension}"

    filepath = os.path.join(
        UPLOAD_FOLDER,
        filename
    )


    # Save uploaded image
    with open(filepath, "wb") as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )


    # Run YOLO
    results = model(filepath)


    # Count potholes
    count = len(
        results[0].boxes
    )


    # Create annotated image
    annotated_image = results[0].plot()


    # Save annotated image
    annotated_filename = (
        f"annotated_{uuid.uuid4()}.jpg"
    )

    annotated_path = os.path.join(
        UPLOAD_FOLDER,
        annotated_filename
    )

    cv2.imwrite(
        annotated_path,
        annotated_image
    )


    # Send result back to frontend
    return JSONResponse({
        "potholes": count,
        "image_url": f"/uploads/{annotated_filename}"
    })