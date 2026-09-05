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

## Getting Started
###1. Clone the repository
git clone https://github.com/ashika-v-k/potholedetector.git

Move into the project directory:
cd potholedetector

### 2. Create a virtual environment
python -m venv .venv

Activate it on Windows:
.\.venv\Scripts\Activate

### 3. Install dependencies
python -m pip install -r requirements.txt

### 4. Start the FastAPI server
python -m uvicorn backend.app:app --reload

The application will be available at:
http://127.0.0.1:8000

Open the URL in your browser.

#  Dataset

The model was trained using a pothole image dataset in YOLO format.
The dataset contains road images with pothole annotations and was divided into training, validation, and test sets.
The dataset was obtained from Roboflow Universe:

Pothole Dataset — Brad Dwyer

Dataset:
https://universe.roboflow.com/brad-dwyer/pothole-voxrl

The dataset is provided under the ODbL 1.0 license.
