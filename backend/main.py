# from fastapi import FastAPI, UploadFile, File
# from fastapi.responses import FileResponse
# from fastapi.middleware.cors import CORSMiddleware
# import torch
# from torchvision import transforms
# from PIL import Image
# import io
# import uuid
# import os

# app = FastAPI()

# # CORS setup so your frontend can talk to backend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # for dev, later restrict to your GitHub domain
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Load your PyTorch model
# model = torch.load("model/unet_model.pth", map_location="cpu")
# model.eval()

# # Define preprocessing
# transform = transforms.Compose([
#     transforms.Resize((256, 256)),  # adjust to your model's input size
#     transforms.ToTensor(),
# ])

# @app.post("/predict/")
# async def predict(file: UploadFile = File(...)):
#     image_data = await file.read()
#     image = Image.open(io.BytesIO(image_data)).convert("RGB")
#     input_tensor = transform(image).unsqueeze(0)  # (1, 3, H, W)

#     with torch.no_grad():
#         output = model(input_tensor)[0]  # (1, H, W) or (C, H, W)
    
#     # Convert output to PIL image
#     output_image = transforms.ToPILImage()(output.squeeze().cpu())

#     # Save and return file
#     filename = f"output_{uuid.uuid4()}.png"
#     output_path = os.path.join("outputs", filename)
#     os.makedirs("outputs", exist_ok=True)
#     output_image.save(output_path)

#     return FileResponse(output_path)

from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import uuid
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    # Generate a dummy black image of size 256x256
    dummy = Image.new("L", (256, 256), 0)  # Black grayscale image

    filename = f"dummy_{uuid.uuid4()}.png"
    os.makedirs("outputs", exist_ok=True)
    filepath = os.path.join("outputs", filename)
    dummy.save(filepath)

    return FileResponse(filepath)
