const Book = require('../models/Book');

// Function to get all books
const getBooks = async (req, res) => {
	try {
		// Fetch all books from the database
		const books = await Book.find();
		res.status(200).json(books);
	} catch (error) {
		res.status(500).json({ message: 'Server error', error });
	}
};

const getBookById = async (req, res) => {
	try {
		const book = await Book.findById(req.params.id); // Find book by ID
		if (!book) {
			return res.status(404).json({ message: 'Book not found' });
		}
		res.status(200).json(book); // Send the book data
	} catch (error) {
		res.status(500).json({ message: 'Error fetching book details', error });
	}
};

module.exports = { getBooks, getBookById };
