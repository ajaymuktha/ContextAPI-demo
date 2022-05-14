import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

export const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Movie Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Price:</label>
        <input
          type="num"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
