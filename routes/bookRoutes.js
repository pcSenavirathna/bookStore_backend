const express = require('express');
const { getBooks, getBookById } = require('../controllers/bookController');

const router = express.Router();

// Route to get all books
router.get('/books', getBooks);
router.get('/books/:id', getBookById);

module.exports = router;
