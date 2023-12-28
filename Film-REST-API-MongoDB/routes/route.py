"""This module contains the routes of the API"""
from bson import ObjectId
from fastapi import APIRouter, Query
from config.database import collection_name
from models.film import Film
from schema.schemas import indevidual_serial, serial_films

router = APIRouter()


@router.get("/")
async def filter_films(
    filter_name: str = Query(
        "",
        title="Filter name",
        description="Specify the field to filter by (Mina, paws, price)",
    ),
    search: str = Query("", title="Search term", description="Optional search term"),
):
    """This function is used to filter and sort films based on the specified criteria."""

    films = collection_name.find()

    if filter_name == "Mina":
        films = sorted(films, key=lambda x: x["Mina"], reverse=True)
    elif filter_name == "paws":
        films = sorted(films, key=lambda x: x["paws"], reverse=True)
    elif filter_name == "price":
        films = sorted(films, key=lambda x: x["price"], reverse=True)

    if search:
        films = [film for film in films if search.lower() in film["name"].lower()]

    return serial_films(films)


@router.get("/{id}")
async def get_film(id: str):  # pylint: disable=[invalid-name, redefined-builtin]
    """This function is used to get a film from the database."""
    film = indevidual_serial(collection_name.find_one({"_id": ObjectId(id)}))
    return film


@router.post("/")
async def post_film(film: Film):
    """This function is used to post a film to the database."""
    collection_name.insert_one(dict(film))


@router.put("/{id}")
async def update_film(
    id: str, film: Film
):  # pylint: disable=[invalid-name, redefined-builtin]
    """This function is used to update a film in the database."""
    collection_name.update_one({"_id": ObjectId(id)}, {"$set": dict(film)})


@router.delete("/{id}")
async def delete_film(id: str):  # pylint: disable=[invalid-name, redefined-builtin]
    """This function is used to delete a film from the database."""
    collection_name.delete_one({"_id": ObjectId(id)})
