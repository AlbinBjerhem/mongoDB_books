# Book and Author Search API

**I aim for a VG**

## Introduction

Welcome to the Book and Author Search API, a project designed to provide users with efficient access to a vast database of books and authors. This API is an essential tool for anyone looking to explore a large collection of literary data.

## Purpose

The purpose of the Book and Author Search API is to facilitate easy access to a wide array of book-related data. Whether you're developing an application to help users discover new books or creating an educational tool to help in literature studies, this API offers the necessary endpoints to retrieve, search, and manipulate book and author data effectively.

## Features

- **Book Search**: Search through the database for books
- **Author Search**: Search through the database for authors
- **High Performance**: Optimized for speed and reliability to handle requests efficiently.

## Getting Started

To begin using the Book and Author Search API, follow these steps:

1. **Clone the repository**: Clone and download project.
2. **Set up the environment**:
    - Update the MongoDB connection strings in `server.js` and `importData.js` to your own.
3. **Install dependencies**: Run `npm install` in the project root directory.
4. **Start MongoDB**: Make sure that MongoDB is running before proceeding to the next steps.
4. **Populate the database**: Execute `node importData.js` to import the initial data into your database.
5. **Start the server**:
    - Use `node server.js` to start the server, or `nodemon server.js` if you have nodemon installed for live updates.

## Project Structure

- `api/`: Contains all API-related files.
- `data/`: Includes data files for populating MongoDB.
- `documentation/`: Holds all documentation related to tests and the API.
- `models/`: Contains Mongoose models for the API.
- `postmanTest/`: Stores Postman test collections.
- `root/`: Contains key project files like `apiRegister`, `importData`, `server`, and `testUtilities`.
