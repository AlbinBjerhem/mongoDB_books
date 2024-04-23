import Author from '../models/Authors.js';

export default function authors(server) {

  // GET endpoint to retrieve all authors
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
      console.error(error);
      res.status(500).json({ message: "Something went horribly wrong!", error: error });
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
      console.error(error);
      res.status(500).json({ message: "Something went horribly wrong!", error: error });
    }
  });

  // DELETE endpoint to delete an author by ID
  server.delete('/api/authors/:id', async (req, res) => {
    try {
      const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
      if (!deletedAuthor) {
        return res.status(404).json({ message: "Author not found" });
      }

      res.status(200).json({ message: "Author deleted successfully", deletedAuthor });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went horribly wrong!", error: error });
    }
  });
}
