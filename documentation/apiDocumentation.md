
# Book and Author Search API Documentation

This document provides detailed information about the usage of the Book and Author Search API. Below are the specifications for each endpoint, including methods, URL patterns, required parameters, and sample responses.

## Base URL

All URLs referenced in the documentation have the following base:
```
http://localhost:3000
```

## API Endpoints

### Books

#### Get Book by ID

- **URL:** `/api/books/:id`
- **Method:** `GET`
- **URL Parameters:**
  - `id` [Integer]: The unique identifier for the book.
- **Success Response:**
  - **Code:** 200
  - **Content:** 
    ```json
    {
      "genre": "Fiction",
      "title": "Sample Book",
      "authorId": 123,
      "publicationDate": "2023-01-01",
      "info": "Detailed info about the book",
      "rating": 5
    }
    ```
- **Error Response:**
  - **Code:** 404 NOT FOUND
  - **Content:** 
    ```json
    { "message": "Book not found" }
    ```

#### Add a New Book

- **URL:** `/api/books`
- **Method:** `POST`
- **Data Constraints:**
  ```json
  {
    "authorId": "[Integer, required]",
    "title": "[String, required]",
    "genre": "[String, required]",
    "publicationDate": "[Date, required]",
    "info": "[String, optional]",
    "rating": "[Integer, optional]"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:** 
    ```json
    { "message": "Book added successfully" }
    ```

### Update a Book

- **URL:** `/api/books/:id`
- **Method:** `PUT`
- **URL Parameters:**
  - `id` [Integer]: The unique identifier for the book to be updated.
- **Data Constraints:**
  ```json
  {
    "authorId": "[Integer, optional]",
    "title": "[String, optional]",
    "genre": "[String, optional]",
    "publicationDate": "[Date, optional]",
    "info": "[String, optional]",
    "rating": "[Integer, optional]"
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    { "message": "Book updated successfully", "updatedBook": { /* updated book details */ } }
    ```
- **Error Response:**
  - **Code:** 404 NOT FOUND
  - **Content:**
    ```json
    { "message": "Book not found" }
    ```

### Delete a Book

- **URL:** `/api/books/:id`
- **Method:** `DELETE`
- **URL Parameters:**
  - `id` [Integer]: The unique identifier for the book to be deleted.
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    { "message": "Book deleted successfully" }
    ```
- **Error Response:**
  - **Code:** 404 NOT FOUND
  - **Content:**
    ```json
    { "message": "Book not found" }
    ```

### Authors

#### Get Author by ID

- **URL:** `/api/authors/:id`
- **Method:** `GET`
- **URL Parameters:**
  - `id` [Integer]: The unique identifier for the author.
- **Success Response:**
  - **Code:** 200
  - **Content:** 
    ```json
    {
      "authorId": 1,
      "firstName": "John",
      "lastName": "Doe"
    }
    ```
- **Error Response:**
  - **Code:** 404 NOT FOUND
  - **Content:** 
    ```json
    { "message": "Author not found" }
    ```

#### Add a New Author

- **URL:** `/api/authors`
- **Method:** `POST`
- **Data Constraints:**
  ```json
  {
    "authorId": "[Integer, required]",
    "firstName": "[String, required]",
    "lastName": "[String, required]"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:** 
    ```json
    { "message": "Author added successfully" }
    ```
    ### Update an Author

- **URL:** `/api/authors/:id`
- **Method:** `PUT`
- **URL Parameters:**
  - `id` [Integer]: The unique identifier for the author to be updated.
- **Data Constraints:**
  ```json
  {
    "firstName": "[String, optional]",
    "lastName": "[String, optional]"
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    { "message": "Author updated successfully", "updatedAuthor": { /* updated author details */ } }
    ```
- **Error Response:**
  - **Code:** 404 NOT FOUND
  - **Content:**
    ```json
    { "message": "Author not found" }
    ```

### Delete an Author

- **URL:** `/api/authors/:id`
- **Method:** `DELETE`
- **URL Parameters:**
  - `id` [Integer]: The unique identifier for the author to be deleted.
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    { "message": "Author deleted successfully" }
    ```
- **Error Response:**
  - **Code:** 404 NOT FOUND
  - **Content:**
    ```json
    { "message": "Author not found" }
    ```

## Simulate Database Failure (Testing Purpose Only)

### Activate Failure Mode

- **URL:** `/api/[books|authors]/simulate-failure`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** 
    ```json
    { "message": "Database failure mode activated." }
    ```

### Restore Database Connection

- **URL:** `/api/[books|authors]/restore-database`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** 
    ```json
    { "message": "Database connection restored." }
    ```
