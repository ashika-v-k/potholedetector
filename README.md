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

```
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
```
## Getting Started
### 1. Clone the repository
```git clone https://github.com/ashika-v-k/potholedetector.git```

Move into the project directory:
```cd potholedetector```

### 2. Create a virtual environment
```python -m venv .venv```

Activate it on Windows:
```.\.venv\Scripts\Activate```

### 3. Install dependencies
```python -m pip install -r requirements.txt```

### 4. Start the FastAPI server
```python -m uvicorn backend.app:app --reload```

The application will be available at:
```http://127.0.0.1:8000```

Open the URL in your browser.

#  Dataset

The model was trained using a pothole image dataset in YOLO format.

The dataset contains road images with pothole annotations and was divided into training, validation, and test sets.


The dataset was obtained from Roboflow Universe:  
Pothole Dataset — Brad Dwyer
Dataset:
https://universe.roboflow.com/brad-dwyer/pothole-voxrl

The dataset is provided under the ODbL 1.0 license.

# Future Improvements

## Possible future improvements include:

- GPS-based pothole location mapping
- Interactive pothole maps
- Pothole statistics and analytics
- Road condition monitoring
- Mobile application
- Cloud deployment
- Severity classification for potholes
- City-wide pothole reporting
- Historical pothole tracking

# Limitations

The accuracy of pothole detection depends on factors such as:

Image quality
Lighting conditions
Camera angle
Pothole size
Road surface conditions

The system is intended as a demonstration of computer vision-based pothole detection and should not be considered a replacement for professional road inspection.

# Author

Ashika V K

B.Tech Electronics & Communication Engineering
Model Engineering College

# License

This project is intended for educational and demonstration purposes.

<img width="1535" height="693" alt="Screenshot 2026-09-06 111353" src="https://github.com/user-attachments/assets/febf4b62-adb2-4c07-a15e-1dddc3ddc738" />
<img width="1535" height="687" alt="Screenshot 2026-09-06 111419" src="https://github.com/user-attachments/assets/f3d12500-b7ed-4e23-9bd6-5e1d57865668" />
<img width="1535" height="690" alt="Screenshot 2026-09-06 111441" src="https://github.com/user-attachments/assets/cb6d7f3e-db45-459b-ada9-4a6980fee62f" />
