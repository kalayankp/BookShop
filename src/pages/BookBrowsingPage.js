import React, { useState } from 'react';
import axios from 'axios';

const BrowseBooks = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      <h1>Browse Books</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
      />
      <button onClick={searchBooks}>Search</button>
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
            <p>Authors: {book.volumeInfo.authors.join(', ')}</p>
            <p>Published Date: {book.volumeInfo.publishedDate}</p>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
