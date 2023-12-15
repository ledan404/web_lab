"""This module contains the routes of the API"""
from bson import ObjectId
from fastapi import APIRouter

from config.database import collection_name
from models.dogs import Dogs
from schema.schemas import indevidual_serial, serial_dogs

router = APIRouter()


@router.get("/")
async def get_dogs():
    """This function is used to get all the dogs from the database."""
    dogs = serial_dogs(collection_name.find())
    return dogs


@router.get("/{id}")
async def get_dog(id: str):# pylint: disable=[invalid-name, redefined-builtin]
    """This function is used to get a dog from the database."""
    dog = indevidual_serial(collection_name.find_one({"_id": ObjectId(id)}))
    return dog


@router.post("/")
async def post_dog(dogs: Dogs):
    """This function is used to post a dog to the database."""
    collection_name.insert_one(dict(dogs))


@router.put("/{id}")
async def update_dog(id: str, dogs: Dogs):# pylint: disable=[invalid-name, redefined-builtin]
    """This function is used to update a dog in the database."""
    collection_name.update_one({"_id": ObjectId(id)}, {"$set": dict(dogs)})


@router.delete("/{id}")
async def delete_dog(id: str):# pylint: disable=[invalid-name, redefined-builtin]
    """This function is used to delete a dog from the database."""
    collection_name.delete_one({"_id": ObjectId(id)})
