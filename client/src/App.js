import React, { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config();

const [bookState, useBookState] = useState({
  books: []
})

function App() {
  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBZh-a4x_DWMuMSbODfA2Vh6fsls0dKA7E` )
    .then((books) => console.log(books))
    .catch(e => console.error(e))
  })
  return (
    <>
<div>Hello World</div>
    </>
  );
}

export default App;
