const express = require('express');
var router = express.Router();
var booksController = require('../controllers/books');

router.get('/', booksController.all)
router.post('/', booksController.create)
router.put('/:id', booksController.update)
router.delete('/:id', booksController.delete)

module.exports = router
