from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import torch
from diffusers import StableDiffusionPipeline, DPMSolverMultistepScheduler
import base64
from io import BytesIO
from PIL import Image
import os

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the model
small_model = "stabilityai/stable-diffusion-2-1"
pipe = StableDiffusionPipeline.from_pretrained(small_model, torch_dtype=torch.bfloat16)
pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
pipe.enable_attention_slicing()
pipe = pipe.to("cuda")

class GenerationRequest(BaseModel):
    prompt: str
    style: str
    num_inference_steps: int = 50

@app.post("/generate")
async def generate_image(request: GenerationRequest):
    try:
        # Combine prompt with style
        full_prompt = f"{request.prompt} in {request.style} style"
        
        # Generate image
        results = pipe(
            full_prompt,
            num_inference_steps=request.num_inference_steps,
            guidance_scale=3.5,
            height=512,
            width=512
        )
        
        # Convert image to base64
        image = results.images[0]
        buffered = BytesIO()
        image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()
        
        return {"image": f"data:image/png;base64,{img_str}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
    