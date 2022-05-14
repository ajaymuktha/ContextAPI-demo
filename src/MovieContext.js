import react, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Harry Potter",
      price: "10$",
    },
    {
      id: 2,
      name: "Star Wars",
      price: "15$",
    },
    {
      id: 3,
      name: "Mission Impossible",
      price: "20$",
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
