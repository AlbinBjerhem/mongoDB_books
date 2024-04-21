import express from "express";
import Book from "./models/Book.js";

const router = express.Router();

// GET all books
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error });
  }
});

// Other CRUD operations for books can be implemented similarly

export default router;
