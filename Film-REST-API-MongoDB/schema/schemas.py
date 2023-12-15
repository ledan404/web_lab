"""This file is used to serialize the data from the database."""
def indevidual_serial(dog) -> dict:
    """This function is used to serialize the data from the database."""
    return {
        "id": str(dog["_id"]),
        "title": str(dog["title"]), 
        "description": str(dog["description"]),
        "price": str(dog["price"]),
    }


def serial_dogs(dogs) -> list:
    """This function is used to serialize the data from the database."""
    return [indevidual_serial(dog) for dog in dogs]
