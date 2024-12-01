import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  const addToBorrowed = (bookTitle) => {
    setBorrowedBooks((prev) => [...prev, bookTitle]);
  };

  const addToFavorites = (bookTitle) => {
    setFavBooks((prev) => [...prev, bookTitle]);
  };

  return (
    <BookContext.Provider
      value={{ borrowedBooks, favBooks, addToBorrowed, addToFavorites }}
    >
      {children}
    </BookContext.Provider>
  );
};
