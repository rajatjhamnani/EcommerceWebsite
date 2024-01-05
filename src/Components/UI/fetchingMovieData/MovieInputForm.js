import React, { useState } from "react";
const MovieInputForm = (props) => {
  const [title, setTitle] = useState();
  const [openingText, setOpeningText] = useState();
  const [date, setDate] = useState();

  const setTitleHandler = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const openingTextHandler = (event) => {
    console.log(event.target.value);
    setOpeningText(event.target.value);
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const NewMovieObj = {
      Title: title,
      Text: openingText,
      Date: date,
    };

    props.data(NewMovieObj);
    console.log(NewMovieObj);
    setTitle("");
    setOpeningText("");
    setDate("");
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={setTitleHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="text">Opening Text </label>
          <input
            type="text"
            name="text"
            value={openingText}
            onChange={openingTextHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Result Date</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={dateChangeHandler}
            required
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </>
  );
};
export default MovieInputForm;
