import Book from '../models/Books.js';

export default function books(server) {
  server.get('/api/books', async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: "Somthing went horribly wrong!", error: error });
    }
  })
}

