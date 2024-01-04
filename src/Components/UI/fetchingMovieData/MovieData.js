import React, { useState } from "react";

const MovieData = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieHandler = async () => {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
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
    setIsLoading(false);
  };
  return (
    <>
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
      {!isLoading && movies.length === 0 && <p>Found no movies</p>}
      {isLoading && <p>Loading...</p>}
    </>
  );
};
export default MovieData;
