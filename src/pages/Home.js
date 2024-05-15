import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Bookstore App!</h1>
      </header>
      <nav className="home-nav">
        <Link to="/browse-books" className="nav-link">Browse Books</Link>
        <Link to="/favorites" className="nav-link">View Favorites</Link>
      </nav>
    </div>
  );
};

export default Home;
