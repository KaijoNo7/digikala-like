"""Minimal demo backend for the Azar Digital storefront prototype.

Only a few endpoints, no database: the product list lives in products.json.
This is a classroom-style demo, not production code.
"""

import json
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Demonstration-only credentials. Not secure authentication.
DEMO_USERNAME = "admin"
DEMO_PASSWORD = "admin"

PRODUCTS_FILE = Path(__file__).parent / "products.json"
PRODUCTS = json.loads(PRODUCTS_FILE.read_text(encoding="utf-8"))

app = FastAPI(title="Azar Digital demo API", version="0.1.0")

# Only the local Vite dev server needs access.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)


class LoginRequest(BaseModel):
    username: str
    password: str


@app.get("/api/health")
def health():
    return {"status": "ok", "service": "azar-digital-demo-api", "products": len(PRODUCTS)}


@app.get("/api/products")
def list_products():
    return {"count": len(PRODUCTS), "products": PRODUCTS}


@app.get("/api/products/{product_id}")
def get_product(product_id: str):
    for product in PRODUCTS:
        if product["id"] == product_id:
            return product
    raise HTTPException(status_code=404, detail="محصول پیدا نشد.")


@app.post("/api/login")
def login(payload: LoginRequest):
    if payload.username == DEMO_USERNAME and payload.password == DEMO_PASSWORD:
        return {"ok": True, "username": payload.username}
    raise HTTPException(status_code=401, detail="نام کاربری یا رمز عبور اشتباه است.")
