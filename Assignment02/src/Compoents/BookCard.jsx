// Step-02 BookCard Component Structure
// Using props 

const BookCard = ({ title, author, rating, genre }) => {
    return (
      <div className="book-card">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Rating: {rating}</p>
        <p>Genre: {genre}</p>
      </div>
    );
  };
  
  export default BookCard;