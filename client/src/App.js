import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookContext from './utils/BookContext';
import Search from './components/views/Search';
import Book from './utils/Book'


function App() {
const [bookState, setBookState] = useState({
  userBooks: [],
  input: '',
  searchBooks: []
})

bookState.handleInputChange = (event) => {
setBookState({...bookState, [event.target.name]: event.target.value })
}

bookState.handleSearchBook = event => {
  event.preventDefault();
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookState.input}&key=AIzaSyBZh-a4x_DWMuMSbODfA2Vh6fsls0dKA7E`)
  .then(({data: {items}}) => {
    let booksInfo = items.map(elem => elem.volumeInfo);
    setBookState({... bookState, input: '', searchBooks: booksInfo});
  })
  .catch(e => console.error(e))
}

bookState.handleSaveBook = (index) => {
  let saveBook = JSON.parse(JSON.stringify(bookState.searchBooks[index]));
  let userBooks = JSON.parse(JSON.stringify(bookState.userBooks));
  userBooks.push(saveBook);
  Book.create(saveBook);
  setBookState({... bookState, userBooks})
}

bookState.handleDeleteBook = (index) => {
  let userBooks = JSON.parse(JSON.stringify(bookState.userBooks));
  userBooks.splice(index, 1);
  setBookState({... bookState, userBooks});
}
 
  return (
    <BookContext.Provider value={bookState}>
     <Search />
    </BookContext.Provider>
  );
}

export default App;
