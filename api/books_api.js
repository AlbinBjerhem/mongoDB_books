import Book from '../models/Books.js';
import mongoose from 'mongoose';

// Middleware to validate 'id' parameter
const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  next();
};

export default function books(server) {
  // Apply the middleware to all routes that include an ':id' parameter
  server.use('/api/books/:id', validateObjectId);

  // Specific GET endpoint to retrieve a single book by ID
  server.get('/api/books/:id', async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.json(book);
    } catch (error) {
      console.error("Error fetching book by ID:", error);
      res.status(500).json({ message: "Something went horribly wrong!", error });
    }
  });

  // General GET endpoint to retrieve all books with optional pagination and search by title
  server.get('/api/books', async (req, res) => {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 10;

      if (page < 1 || limit < 1) {
        return res.status(400).json({ message: "Page and limit must be positive integers." });
      }

      const { title } = req.query;
      let query = {};

      if (title) {
        query.title = { $regex: new RegExp(title, 'i') };
      }

      const skip = (page - 1) * limit;
      const books = await Book.find(query).skip(skip).limit(limit);

      res.status(200).json(books);
    } catch (error) {
      console.error("Error fetching books:", error);
      res.status(500).json({ message: "Something went horribly wrong!", error });
    }
  });

  // POST endpoint to post new books
  server.post('/api/books', async (req, res) => {
    try {
      const { authorId, title, genre, publicationDate, info, rating } = req.body;
      const newBook = new Book({
        authorId,
        title,
        genre,
        publicationDate,
        info,
        rating
      });

      const savedBook = await newBook.save();

      res.status(201).json(savedBook);
    } catch (error) {
      console.error("Error adding new book:", error);
      res.status(500).json({ message: "Something went horribly wrong!", error });
    }
  });

  // DELETE endpoint to delete books
  server.delete('/api/books/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }

      res.status(200).json({ message: "Book deleted successfully", deletedBook });
    } catch (error) {
      console.error("Error deleting book:", error);
      res.status(500).json({ message: "Something went horribly wrong!", error });
    }
  });

  // PUT endpoint to update a book
  server.put('/api/books/:id', async (req, res) => {
    try {
      const { authorId, title, genre, publicationDate, info, rating } = req.body;
      const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        { $set: { authorId, title, genre, publicationDate, info, rating } },
        { new: true, runValidators: true }
      );

      if (!updatedBook) {
        return res.status(404).json({ message: "Book not found" });
      }

      res.status(200).json({ message: "Book updated successfully", updatedBook });
    } catch (error) {
      console.error("Error updating book:", error);
      res.status(500).json({ message: "Something went horribly wrong!", error });
    }
  });
}
