from fastapi import FastAPI
from app.routers import items
from app.core.config import settings

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Production Structure from samir Maharjan🚀",
            "app_name": settings.app_name,
            "debug_mode": settings.debug,
            "Database_URL": settings.database_url
            
            }

app.include_router(items.router)