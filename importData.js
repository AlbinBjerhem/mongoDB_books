import fs from 'fs';
import mongoose from 'mongoose';
import Author from './models/Authors.js';
import Book from './models/Books.js';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://albinbjerhem:albin12345@cluster0.79wvc3z.mongodb.net/book_API');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    const authorsData = JSON.parse(fs.readFileSync('./data/mockaroo_authors.json', 'utf-8'));
    const booksData = JSON.parse(fs.readFileSync('./data/mockaroo_books.json', 'utf-8'));

    await Author.insertMany(authorsData);
    console.log('Authors imported successfully');

    await Book.insertMany(booksData);
    console.log('Books imported successfully');
  } catch (error) {
    console.error('Error importing data', error);
    process.exit(1);
  }
};

const importAllData = async () => {
  await connectDB();
  await importData();
  mongoose.connection.close();
};

importAllData();
