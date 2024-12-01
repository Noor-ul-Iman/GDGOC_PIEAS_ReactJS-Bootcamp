import React from 'react';
import BookCard from './BookCard';
import { Books } from '../books'; 
import '../Stylescss/high.css'; 
const HighRatedBooks = () => {
  const highRated = Books.filter((book) => book.rating > 4.5);

  return (
    <div className="book-container">
      <h2>High Rated Books</h2>
      <div className="book-cards">
        {highRated.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default HighRatedBooks;
