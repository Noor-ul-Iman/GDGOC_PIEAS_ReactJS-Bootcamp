import React, { useContext } from 'react';
import { LibraryContext } from '../App';
import BookCard from './BookCard';

const BookList = () => {
  const { books } = useContext(LibraryContext);

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
