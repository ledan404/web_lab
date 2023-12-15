# Film REST API with MongoDB

This repository contains a FastAPI application that serves as an API for managing film data. The API connects to a MongoDB database to store and retrieve information about films. It includes endpoints for listing, adding, updating, and deleting films.

## Getting Started

To run this FastAPI application, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ledan404/Film-REST-API-MongoDB
    cd Film-REST-API-MongoDB
    ```

2. **Install dependencies:**

    It's recommended to create a virtual environment before installing dependencies to keep your project isolated.

    ```bash
    python3 -m venv venv  # Create a virtual environment (skip if you already have one)
    source venv/bin/activate  # Activate the virtual environment
    pip3 install -r requirements.txt  # Install project dependencies
    ```
3. **Set Up MongoDB:**

    This application uses MongoDB as the database to store film data. Here's how you can set up and connect to MongoDB:

    - Install MongoDB: Follow the [official installation guide](https://docs.mongodb.com/manual/installation/) to install MongoDB on your system.

    - Create a MongoDB Atlas account (optional): You can also use a cloud-hosted MongoDB service like MongoDB Atlas. Create an account and set up a cluster to get the connection URI.

4.1 **Run the application in the local machine:**

    ```bash
    uvicorn main:app --reload
    ```

    The FastAPI application will start, and you'll be able to access the API at `http://localhost:8000`.
4.2 **Run the application using Docker:**

    If you prefer using Docker to manage the application and its dependencies, you can build and run the application using the provided Dockerfile.

    ```bash
    docker build -t film-rest-api .
    docker run -p 8000:8000 film-rest-api
    ```

## Project Structure

The repository is organized as follows:

- `main.py`: The main file for the FastAPI application. It initializes the FastAPI app, includes the router, and starts the server using Uvicorn.

- `config/database.py`: This file connects to the MongoDB database and creates a collection to store film data.

- `routes/route.py`: This module contains the routes of the API. It defines the endpoints for listing, adding, updating, and deleting films.

- `models/film.py`: This module defines the `Film` model using Pydantic. It specifies the structure of film data, including title, actors, rating, description, and facts.

- `schema/schemas.py`: This file contains functions for serializing the data from the database. It includes `individual_serial` to serialize a single film and `serial_films` to serialize a list of films.

## Endpoints

### Get All Films

Endpoint: `GET /`

This endpoint returns a list of all films stored in the database.

### Get Film by ID

Endpoint: `GET /{id}`

This endpoint retrieves a specific film by its unique ID.

### Add Film

Endpoint: `POST /`

This endpoint allows you to add a new film to the database. You should provide the film details in the request body.

### Update Film

Endpoint: `PUT /{id}`

This endpoint updates an existing film's details in the database. You should provide the updated film details in the request body.

### Delete Film

Endpoint: `DELETE /{id}`

This endpoint deletes a film from the database based on its ID.

## Film Model

The `Film` model is used to structure the data for films. It includes the following fields:

- `title`: The title of the film.
- `actors`: A list of actor names.
- `rating`: The film's rating (float value).
- `description`: A description of the film.
- `facts`: A list of interesting facts about the film.

## Dependencies

The application uses the following dependencies:

- `FastAPI`: A modern web framework for building APIs with Python.
- `uvicorn`: ASGI server to run the FastAPI application.
- `pymongo`: Python driver for MongoDB to connect and interact with the database.
- `pydantic`: Data validation and settings management using Python type annotations.

## Contributing

Feel free to contribute to this project by opening issues, suggesting enhancements, or submitting pull requests. Your contributions are greatly appreciated!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
