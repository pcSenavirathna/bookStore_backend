const mongoose = require('mongoose');

// Define the book schema
const bookSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
	rating: { type: Number, required: true },
});

// Create a model from the schema
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
