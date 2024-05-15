import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BrowseBooks from './components/BrowseBooks';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/browse-books" element={<BrowseBooks />} />
        <Route exact path="/book/:bookId" element={<BookDetails />} />
        <Route exact path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default App;
