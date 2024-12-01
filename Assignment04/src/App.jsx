import React, { createContext, useEffect, useState } from 'react';
import BookList from './Compoents/BookList';
import BorrowedBooks from './Compoents/BorrowedBooks';
import FavBooks from './Compoents/FavBooks';

export const LibraryContext = createContext();

const App = () => {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('./books.json');
        if (!response.ok) throw new Error('Failed to fetch books');
        const data = await response.json();
        console.log('Fetched books:', data);
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
  
    fetchBooks();
  }, []);
  return (
    <LibraryContext.Provider value={{ books, borrowedBooks, setBorrowedBooks, favBooks, setFavBooks }}>
      <h1>Library Manager</h1>
      <BookList />
      <h2>Borrowed Books</h2>
      <BorrowedBooks />
      <h2>Favorite Books</h2>
      <FavBooks />
    </LibraryContext.Provider>
  );
};

export default App;
