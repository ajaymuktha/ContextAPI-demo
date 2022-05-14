import { AddMovie } from "./AddMovie";
import "./App.css";
import { MovieProvider } from "./MovieContext";

import { MovieList } from "./MovieList";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
