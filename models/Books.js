import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authorId: {
    type: Number,
    required: true,
    ref: 'Author' // This assumes you are referencing by the `authorId` and not the MongoDB `_id`
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

