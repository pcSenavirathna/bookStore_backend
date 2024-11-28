const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the Express app
const app = express();

// Allow CORS for frontend requests
app.use(cors());

// Set up a static directory for serving images
app.use('/assets/images', express.static(path.join(__dirname, 'assets', 'images')));

// MongoDB connection (replace with your MongoDB URI)
mongoose.connect('mongodb+srv://chandima2017:prasad@bookstore.pdwfz.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('MongoDB connection error:', err));

// Define Book Schema and Model
const bookSchema = new mongoose.Schema({
	title: String,
	author: String,
	description: String,
	rating: Number,
	image: String, // Store the image name (e.g., 'image1.jpg')
});

const Book = mongoose.model('Book', bookSchema);

// Endpoint to fetch books from MongoDB
app.get('/api/books', async (req, res) => {
	try {
		const books = await Book.find(); // Fetch books from MongoDB
		res.json(books); // Return the books as JSON
	} catch (error) {
		res.status(500).json({ message: 'Error fetching books' });
	}
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
