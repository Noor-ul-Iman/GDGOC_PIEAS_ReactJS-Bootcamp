// Step-03 Create Functional Components
// 1.Filters and displays books with a rating higher than 4.5.

import { Books } from "../books"; 
// Step 04: Use BookCard as Child Component
import BookCard from "./BookCard";
import "../Stylescss/high.css"; 

const HighRatedBooks = () => {
  const highRatedBooks = Books.filter(book => book.rating > 4.5);
  
  return (
    <div className="book-container">
      <h2>High Rated Books</h2>
      <div className="book-cards">
        {highRatedBooks.map(book => (
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

export default HighRatedBooks;
