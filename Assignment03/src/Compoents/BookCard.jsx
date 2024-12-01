import React from 'react';
import Button from './Button';

const BookCard = ({ title, author, rating, genre }) => {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
      <p>Genre: {genre}</p>
      <Button title={title} />
    </div>
  );
};

export default BookCard;
