import React, { useState } from "react";

const MovieData = (props) => {
  const [movies, setMovies] = useState([]);

  const fetchMovieHandler = async () => {
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
  };
  return (
    <>
      <section>
        <button onClick={fetchMovieHandler}>fetch data</button>
      </section>
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
    </>
  );
};
export default MovieData;
