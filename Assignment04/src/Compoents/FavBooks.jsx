import React, { useContext } from 'react';
import { LibraryContext } from '../App';

const FavBooks = () => {
  const { favBooks } = useContext(LibraryContext);

  return (
    <ul>
      {favBooks.map((title, index) => (
        <li key={index}>{title}</li>
      ))}
    </ul>
  );
};

export default FavBooks;
