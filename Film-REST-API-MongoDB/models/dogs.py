"""Dog model"""
from typing import List

from pydantic import BaseModel


class Dogs(BaseModel):
    """Dog model"""
    title: str 
    description: str
    price: int 
