import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

export const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => {
        return (
          <div>
            <h3>{movie.name}</h3>
            <p>{movie.price}</p>
          </div>
        );
      })}
    </div>
  );
};
