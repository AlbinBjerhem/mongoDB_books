import fs from 'fs';
import mongoose from 'mongoose';
import Author from './models/Authors.js'; // Assuming you have a model for Author
import Book from './models/Books.js'; // Assuming you have a model for Book

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://albinbjerhem:albin12345@cluster0.79wvc3z.mongodb.net/book_API');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Exit the script if unable to connect to MongoDB
  }
};


const importData = async () => {
  try {
    // Read JSON files
    const authorsData = JSON.parse(fs.readFileSync('./data/mockaroo_authors.json', 'utf-8'));
    const booksData = JSON.parse(fs.readFileSync('./data/mockaroo_books.json', 'utf-8'));

    // Import authors
    await Author.insertMany(authorsData);
    console.log('Authors imported successfully');

    // Import books
    await Book.insertMany(booksData);
    console.log('Books imported successfully');
  } catch (error) {
    console.error('Error importing data', error);
    process.exit(1); // Exit the script if an error occurs
  }
};

const importAllData = async () => {
  await connectDB(); // Connect to MongoDB
  await importData(); // Import data
  mongoose.connection.close(); // Close MongoDB connection after importing data
};

importAllData(); // Start importing data
