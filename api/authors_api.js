import Authors from '../models/Authors.js';

export default function authors(server) {
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
      const authors = await Authors.find(query).skip(skip).limit(limit);

      res.status(200).json(authors);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went horribly wrong!", error: error });
    }
  });
}


