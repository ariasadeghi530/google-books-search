import React, { createContext } from 'react';

const BookContext = createContext({
  books: [],
  query: '',
  input: '',
  book: {},
  handleInputChange: () => { },
  handleSearchBook: () => { }
});

export default BookContext;