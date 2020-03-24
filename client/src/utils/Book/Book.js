import axios from 'axios';

const Book = {
  read: () => axios.get('/api/books'),
  create: book => axios.post('/api/books', book),
  update: (update, id) => axios.put(`/api/books/${id}`, updates),
  delete: id => axios.delete(`/api/books/${id}`)
}

export default Book;