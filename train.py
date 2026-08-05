from ultralytics import YOLO

model = YOLO("yolov8n.pt")

model.train(
    data="datasets/Pothole.v1-raw.yolov8/data.yaml",
    epochs=40,
    imgsz=640
)