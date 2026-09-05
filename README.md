# RoadGuard AI — Pothole Detection System

An AI-powered computer vision web application that detects and counts potholes in road images using a custom-trained YOLO object detection model.

RoadGuard AI is designed to demonstrate how computer vision can be used to identify road surface damage and support safer, smarter road infrastructure.

---

## Features

-  Upload a road image
-  Detect potholes using YOLO
-  Locate potholes using bounding boxes
-  Automatically count detected potholes
-  Display the annotated image with detected potholes
-  Simple and responsive web interface
-  FastAPI backend for handling image detection
-  Responsive design for desktop and mobile devices

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- FastAPI
- Uvicorn

### Machine Learning
- YOLO
- Ultralytics
- PyTorch
- OpenCV

### Development Tools
- Git
- GitHub
- VS Code

---

## How It Works

The application follows this workflow:

```text
User uploads road image
        ↓
Frontend sends image to FastAPI
        ↓
YOLO model processes the image
        ↓
Potholes are detected
        ↓
Bounding boxes are generated
        ↓
Number of potholes is calculated
        ↓
Annotated image is returned
        ↓
Result displayed to the user
