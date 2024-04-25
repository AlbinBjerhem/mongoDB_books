import Author from '../models/Authors.js';
import mongoose from 'mongoose';

// Middleware to validate 'id' parameter
const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  next();
};

export default function authors(server) {

  // Specific GET endpoint to retrieve a single author by ID
  server.get('/api/authors/:id', validateObjectId, async (req, res) => {
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

  // General GET endpoint to retrieve all authors with optional pagination and search by firstName
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

      res.status(200).json(authors);
    } catch (error) {
      console.error("Error fetching authors:", error);
      res.status(500).json({ message: "Something went horribly wrong!", error });
    }
  });

  // POST endpoint to add a new author
  server.post('/api/authors', async (req, res) => {
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

  // DELETE endpoint to delete an author by ID
  server.delete('/api/authors/:id', validateObjectId, async (req, res) => {
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

  // PUT endpoint to update an author
  server.put('/api/authors/:id', validateObjectId, async (req, res) => {
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
