import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BrowseBooks.css';


const BrowseBooks = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const addToFavorites = (book) => {
    let currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const bookData = {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors || ['Unknown'],
      publishedDate: book.volumeInfo.publishedDate || 'Unknown',
      thumbnail: book.volumeInfo.imageLinks?.thumbnail || 'default-thumbnail.jpg'
    };
    if (!currentFavorites.some((fav) => fav.id === book.id)) {
      currentFavorites.push(bookData);
      localStorage.setItem('favorites', JSON.stringify(currentFavorites));
    }
  };
  
  const searchBooks = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      setBooks(response.data.items || []);
    } catch (error) {
      setError('Error fetching books. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // You can add additional logic here if needed (e.g., initial load)
  }, []);


  
  return (
    <div className="browse-books">
      <h1 className="title">Browse Books</h1>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="search-input"
        />
        <button onClick={searchBooks} className="search-button">Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <h2 className="book-title">{book.volumeInfo.title}</h2>
            <button  className='favorite-item button' onClick={() => addToFavorites(book)}>Add to Favorites</button>
            <p className="book-authors">Authors: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
            <p className="book-published">Published Date: {book.volumeInfo.publishedDate || 'Unknown'}</p>
            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="book-thumbnail" />
            )}
          </div>
        ))}
        
      </div>
      
    </div>
  );
};

export default BrowseBooks;


