import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// API KEY dc464188

const API_URL = "http://www.omdbapi.com?apikey=dc464188";

const App = () => {
  const [movies, setMovies] = useState(["avengers"]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies("movie");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  return (
    <div className="app">
      <h1>Obilomania Movie Zone</h1>

      <div className="search">
        <input
          placeholder="Search For movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={() => searchMovies(searchTerm)}
        />
        <img
          src={SearchIcon}
          alt="search"
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
