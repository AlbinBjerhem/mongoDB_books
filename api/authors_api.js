import Author from '../models/Authors.js';
import mongoose from 'mongoose';
import { toggleDatabaseFailure, isDatabaseFailureSimulated } from '../testUtilites.js';

export default function authors(server) {
  const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    next();
  };

  if (process.env.NODE_ENV !== 'production') {
    server.get('/api/authors/simulate-failure', (req, res) => {
      toggleDatabaseFailure(true);
      res.json({ message: "Database failure mode activated for authors." });
    });

    server.get('/api/authors/restore-database', (req, res) => {
      toggleDatabaseFailure(false);
      res.json({ message: "Database connection restored for authors." });
    });
  }

  server.get('/api/authors/:id', validateObjectId, async (req, res) => {
    if (isDatabaseFailureSimulated()) {
      return res.status(503).json({ message: "Service temporarily unavailable due to a database issue" });
    }
    try {
      const author = await Author.findById(req.params.id);
      if (!author) {
        return res.status(404).json({ message: "Author not found" });
      }
      res.json(author);
    } catch (error) {
      console.error("Error fetching author by ID:", error);
      res.status(500).json({ message: "Something went horribly wrong!", error });
    }
  });

  server.get('/api/authors', async (req, res) => {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 10;

      if (page < 1 || limit < 1) {
        return res.status(400).json({ message: "Page and limit must be positive integers." });
      }

      const { firstName } = req.query;
      let query = {};

      if (firstName) {
        query.firstName = { $regex: new RegExp(firstName, 'i') };
      }

      const skip = (page - 1) * limit;
      const authors = await Author.find(query).skip(skip).limit(limit);

      if (authors.length === 0) {
        return res.status(404).json({ message: "No authors found with the specified name" });
      }

      res.status(200).json(authors);
    } catch (error) {
      console.error("Error fetching authors:", error);
      res.status(500).json({ message: "Something went horribly wrong!", error });
    }
  });

  server.post('/api/authors', async (req, res) => {
    if (isDatabaseFailureSimulated()) {
      return res.status(503).json({ message: "Service temporarily unavailable due to a database issue" });
    }
    try {
      const { authorId, firstName, lastName } = req.body;
      const newAuthor = new Author({
        authorId,
        firstName,
        lastName
      });
      const savedAuthor = await newAuthor.save();

      res.status(201).json(savedAuthor);
    } catch (error) {
      console.error("Error adding new author:", error);
      res.status(500).json({ message: "Something went horribly wrong!", error });
    }
  });

  server.delete('/api/authors/:id', validateObjectId, async (req, res) => {
    if (isDatabaseFailureSimulated()) {
      return res.status(503).json({ message: "Service temporarily unavailable due to a database issue" });
    }
    try {
      const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
      if (!deletedAuthor) {
        return res.status(404).json({ message: "Author not found" });
      }

      res.status(200).json({ message: "Author deleted successfully", deletedAuthor });
    } catch (error) {
      console.error("Error deleting author:", error);
      res.status(500).json({ message: "Something went horribly wrong!", error });
    }
  });

  server.put('/api/authors/:id', validateObjectId, async (req, res) => {
    if (isDatabaseFailureSimulated()) {
      return res.status(503).json({ message: "Service temporarily unavailable due to a database issue" });
    }
    try {
      const { firstName, lastName } = req.body;
      const updatedAuthor = await Author.findByIdAndUpdate(
        req.params.id,
        { $set: { firstName, lastName } },
        { new: true, runValidators: true }
      );

      if (!updatedAuthor) {
        return res.status(404).json({ message: "Author not found" });
      }

      res.status(200).json({ message: "Author updated successfully", updatedAuthor });
    } catch (error) {
      console.error("Error updating author:", error);
      res.status(500).json({ message: "Something went horribly wrong!", error });
    }
  });
}
