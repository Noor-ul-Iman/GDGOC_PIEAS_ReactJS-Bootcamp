//Step-03  Create Functional Components
// 2. Iterates over an array of books and prints their details (title, author, rating, genre).
import React from "react";
import { Books } from "../books";
// Step 04: Use BookCard as Child Component
import BookCard from "./BookCard";
import "../Stylescss/details.css"; 
const BookDetails = () => {
  return (
    <div className="book-details-container">
      <h2>All Book Details</h2>
      <div className="book-details-grid">
        {Books.map(book => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            genre={book.genre}
          />
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
