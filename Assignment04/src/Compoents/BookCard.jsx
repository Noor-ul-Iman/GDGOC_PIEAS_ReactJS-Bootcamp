import React, { useContext } from 'react';
import { LibraryContext } from '../App';

const BookCard = ({ book }) => {
  const { borrowedBooks, setBorrowedBooks, favBooks, setFavBooks } = useContext(LibraryContext);

  const addToBorrowed = () => {
    if (!borrowedBooks.includes(book.title)) {
      setBorrowedBooks([...borrowedBooks, book.title]);
    }
  };

  const addToFavorites = () => {
    if (!favBooks.includes(book.title)) {
      setFavBooks([...favBooks, book.title]);
    }
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <button onClick={addToBorrowed}>Add Me</button>
      <button onClick={addToFavorites}>Favorite</button>
    </div>
  );
};

export default BookCard;
