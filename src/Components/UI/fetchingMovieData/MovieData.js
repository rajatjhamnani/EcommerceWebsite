import React, { useCallback, useEffect, useState } from "react";
import MovieInputForm from "./MovieInputForm";

const MovieData = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  function stopHandler() {
    setIsLoading(false);
    setError(!error);
  }

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-movie-project-84a06-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong ...Retrying");
      }
      const data = await response.json();
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].Title,
          openingText: data[key].Text,
          date: data[key].Date,
        });
      }
      console.log(loadedMovies);

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  const addMovieHandler = useCallback(async (movie) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-movie-project-84a06-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("something went wrong ...Retrying");
      }
      const data = await response.json();

      setMovies((prevMovies) => [...prevMovies, movie]);

      console.log(data);
    } catch (error) {
      setError(error.message);
    }
    fetchMovieHandler();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler, addMovieHandler]);

  const deleteMovieHandler = async (movieId) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://react-movie-project-84a06-default-rtdb.firebaseio.com/movies/${movieId}.json`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete movie. Please try again.");
      }

      setMovies((prevMovies) =>
        prevMovies.filter((movie) => movie.id !== movieId)
      );
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <>
      <MovieInputForm data={addMovieHandler} />
      <section>
        <button onClick={fetchMovieHandler}>fetch data</button>
      </section>
      {!isLoading && movies.length > 0 && (
        <section>
          <h1>Movies</h1>
          {movies.map((data) => (
            <ul>
              <li>
                <h2>{data.title}</h2>
                <h3>{data.openingText}</h3>
                <p>{data.releaseDate}</p>
                <button onClick={() => deleteMovieHandler(data.id)}>
                  Delete movie
                </button>
              </li>
            </ul>
          ))}
        </section>
      )}
      {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>{error}</p>}
      <button onClick={stopHandler}>Stop</button>
    </>
  );
};
export default MovieData;
