import React, { useContext } from 'react';
import { BookContext } from '../BookContext';

const BorrowedBooks = () => {
  const { borrowedBooks } = useContext(BookContext);

  return (
    <div>
      <h2>Borrowed Books</h2>
      <ul>
        {borrowedBooks.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedBooks;
