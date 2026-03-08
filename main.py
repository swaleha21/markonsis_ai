from main import FastAPI
from dotenv import load_dotenv
import os

# Load .env file
load_dotenv()

app = FastAPI()

AI_KEY = os.getenv("GEMINI_API_KEY")

@app.get("/")
def root():
    return {"message": "Open-Fiesta FastAPI backend is running!"}

@app.get("/ai")
def ai_response(query: str):
    return {"query": query, "response": f"Using AI_KEY: {AI_KEY}"}

@app.get("/healthz")
def health_check():
    return {"status": "ok"}