import React, { useContext } from 'react';
import { BookContext } from '../BookContext';

const FavBooks = () => {
  const { favBooks } = useContext(BookContext);

  return (
    <div>
      <h2>Favorite Books</h2>
      <ul>
        {favBooks.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavBooks;
