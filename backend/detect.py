from ultralytics import YOLO

model = YOLO("runs/detect/train-2/weights/best.pt")

results = model("test-images/road.jpg")

results[0].show()

count = len(results[0].boxes)

print("Number of potholes detected:", count)