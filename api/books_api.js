import Book from '../models/Books.js';

export default function books(server) {

  // GET endpoint to get all books
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
      console.error(error);
      res.status(500).json({ message: "Something went horribly wrong!", error: error });
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
      console.error(error);
      res.status(500).json({ message: "Something went horribly wrong!", error: error });
    }
  });

  //DELETE endpoint to delete books
  server.delete('/api/books/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }

      res.status(200).json({ message: "Book deleted successfully", deletedBook });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went horribly wrong!", error: error });
    }
  });
}



