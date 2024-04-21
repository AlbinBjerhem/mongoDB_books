import express from "express";
import Author from "./models/Author.js";

const router = express.Router();

// GET all authors
router.get("/authors", async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error });
  }
});

// Other CRUD operations for authors can be implemented similarly

export default router;
