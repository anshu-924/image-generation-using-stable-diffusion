# 🧵 One-Tap Fashion Brand Generator

This project lets users generate AI-powered clothing designs from simple text prompts using **Stable Diffusion 2.1**. It features a FastAPI backend that runs the image generation model and a React frontend for user interaction.

## 📦 Features

* Enter a text prompt like “a casual black hoodie”
* Select a visual style (realistic, black & white, etc.)
* Generate a fashion design image using self hosted LLM 
* See real-time results with an intuitive frontend

---

## 🧠 Tech Stack

* **Frontend:** React.js
* **Backend:** FastAPI, Torch, HuggingFace Diffusers
* **Model:** Stable Diffusion 2.1 you can use better versions if you have good device
* **Inference Device:** CUDA-enabled GPU

---

## ⚙️ Requirements

* Python 3.8+
* Node.js 14+
* CUDA-compatible GPU (for optimal performance) or else you can use cpu only but it will take more time

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/one-tap-fashion.git
cd one-tap-fashion
```

---

## 🖥️ Backend Setup (FastAPI + Stable Diffusion)

### Step 1: (Recommended) Create a Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

### Step 2: Install Python Dependencies

```bash
pip install -r requirements.txt
```

### Step 3: Run the Backend Server

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will serve the `/generate` endpoint that accepts a JSON payload with the prompt, style, and inference steps.

---

## 🌐 Frontend Setup (React)

### Step 1: Navigate to `frontend/` Folder

```bash
cd frontend
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Frontend Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to interact with the UI.


---

## 📌 Notes

* Ensure your system has a CUDA-capable GPU.
* You can fine-tune or extend the current Stable Diffusion model for better customization.

---

