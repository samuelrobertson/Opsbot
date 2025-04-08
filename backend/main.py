from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from llm import call_gpt

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/api/chat")
async def chat(request: Request):
    data = await request.json()
    message = data.get("message", "")
    response = call_gpt(message)
    return {"response": response}
