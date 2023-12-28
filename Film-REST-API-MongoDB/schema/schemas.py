"""This file is used to serialize the data from the database."""


def indevidual_serial(film) -> dict:
    """This function is used to serialize the data from the database."""
    return {
        "id": str(film["_id"]),
        "name": film["name"],
        "description": film["description"],
        "Mina": film["Mina"],
        "paws": film["paws"],
        "price": film["price"],
    }


def serial_films(films) -> list:
    """This function is used to serialize the data from the database."""
    return [indevidual_serial(film) for film in films]
