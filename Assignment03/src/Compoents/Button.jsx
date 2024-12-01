import React, { useContext } from 'react';
import { BookContext } from '../BookContext';

const Button = ({ title }) => {
  const { addToBorrowed, addToFavorites } = useContext(BookContext);

  return (
    <div>
      <button onClick={() => addToBorrowed(title)}>Add Me</button>
      <button onClick={() => addToFavorites(title)}>Favorite</button>
    </div>
  );
};

export default Button;
