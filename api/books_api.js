import Book from '../models/Books.js';

export default function books(server) {
  server.get('/api/books', async (req, res) => {
    try {
      const { title } = req.query;

      let query = {};
      if (title) {
        query = { title: { $regex: new RegExp(title, 'i') } };
      }

      const books = await Book.find(query);

      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: "Something went horribly wrong!", error: error });
    }
  });
}


