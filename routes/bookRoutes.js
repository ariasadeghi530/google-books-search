const router = require('express').Router();

const {Book} = require('../models');

router.get('/books', (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(e => console.log(e));
})

router.post('/books', (req, res) => {
  Book.create(req.body)
  .then((book) => {
    console.log(book);
    res.sendStatus(200);
  })
  .catch(e => console.error(e));
})

router.put('/books/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e));
})

router.delete('/books/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e));
})

module.exports = router;