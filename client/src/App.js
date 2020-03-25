import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookContext from './utils/BookContext';


const [bookState, setBookState] = useState({
  books: [],
  query: '',
  input: '',
  book: {}
})

bookState.handleInputChange = (event) => {
setBookState({...bookState, [event.target.name]: event.target.value })
}

bookState.handleSearchBook = event => {
  event.preventDefault();
  setBookState({... bookState, query: bookState.input, input: ''});
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookState.query}&key=AIzaSyBZh-a4x_DWMuMSbODfA2Vh6fsls0dKA7E`)
  .then((books) => setBookState({... bookState, book: books}))
  .catch(e => console.error(e))
}

function App() {
 
  return (
    <BookContext.Provider value={bookState}>
<div>Hello World</div>
    </BookContext.Provider>
  );
}

export default App;
