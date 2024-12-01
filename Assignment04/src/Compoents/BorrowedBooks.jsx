import React, { useContext } from 'react';
import { LibraryContext } from '../App';

const BorrowedBooks = () => {
  const { borrowedBooks } = useContext(LibraryContext);

  return (
    <ul>
      {borrowedBooks.map((title, index) => (
        <li key={index}>{title}</li>
      ))}
    </ul>
  );
};

export default BorrowedBooks;
