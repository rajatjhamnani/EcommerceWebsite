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
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("something went wrong ...Retrying");
      }
      const data = await response.json();

      const transformedData = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMovies(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);
  return (
    <>
      <MovieInputForm />
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
