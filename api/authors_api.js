import Authors from '../models/Authors.js';

export default function authors(server) {
  server.get('/api/authors', async (req, res) => {
    try {
      const authors = await Authors.find();
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json({ message: "Something went horribly wrong!", error: error });
    }
  });
}

