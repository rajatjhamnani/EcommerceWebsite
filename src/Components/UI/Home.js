import React from "react";
import Header from "./Header";
import MovieData from "./fetchingMovieData/MovieData";

const Home = () => {
  return (
    <>
      <Header />
      <h1>This is my Home Page</h1>
      <MovieData />
    </>
  );
};
export default Home;
