import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  genre: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  authorId: {
    type: Number,
    required: true,
    ref: 'Author'
  },
  publicationDate: {
    type: Date,
    required: true
  },
  info: String,
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;

