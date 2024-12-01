//Step-03  Create Functional Components
//4. Displays an array of book authors.

import { Books } from "../books";
import "../Stylescss/authors.css"; 
const BookAuthors = () => {
  const authors = Books.map((book) => book.author);

  return (
    <div className="authors-container">
      <h2>Book Authors</h2>
      <div className="authors-cards">
        {authors.map((author, index) => (
          <div key={index} className="author-card">
            <p>{author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookAuthors;
