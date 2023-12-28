"""Film model"""
from typing import List

from pydantic import BaseModel


class Film(BaseModel):
    """Film model"""

    name: str
    description: str
    Mina: int
    paws: int
    price: int
