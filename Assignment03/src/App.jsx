import React from 'react';
import { BookProvider } from './BookContext';
import HighRatedBooks from './Compoents/HighRatedBooks';
import FictionBooks from './Compoents/FictionBooks';
import BookDetails from './Compoents/BookDetails';
import BorrowedBooks from './Compoents/BorrowedBooks';
import FavBooks from './Compoents/FavBooks';

function App() {
  return (
    <BookProvider>
      <div>
        <h1>Library Manager</h1>
        <HighRatedBooks />
        <FictionBooks />
        <BookDetails />
        <BorrowedBooks />
        <FavBooks />
      </div>
    </BookProvider>
  );
}

export default App;
