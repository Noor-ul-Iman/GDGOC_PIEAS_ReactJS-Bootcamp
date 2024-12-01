// Step-03 Create Functional Components
//3. Filters and displays books with the genre "fiction".
import { Books } from "../books";

//Step 04: Use BookCard as Child Component
import BookCard from "./BookCard";  

import "../Stylescss/fiction.css"; 

const FictionBooks = () => {
  const fictionBooks = Books.filter(book => book.genre.toLowerCase() === "fiction");
  
  return (
    <div className="fiction-books-container">
      <h2>Fiction Books</h2>
      <div className="fiction-books-grid">
        {fictionBooks.map(book => (
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

export default FictionBooks;
