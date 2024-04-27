import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  authorId: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});

const Author = mongoose.model('Author', authorSchema);

export default Author;
