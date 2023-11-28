import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { setAddBook, fetchBook } from '../../redux/slices/booksSlice';
import { createBookWithID } from '../../utils/createBookWithID';

import booksData from '../../data/books.json';

import './BookForm.css';

export const BookForm = () => {
  const [titleValue, setTitleValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (titleValue && authorValue) {
      const book = createBookWithID(
        { title: titleValue, author: authorValue },
        'manual'
      );
      dispatch(setAddBook(book));

      setTitleValue('');
      setAuthorValue('');
    }
  };

  const addRandomBookHandler = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    dispatch(setAddBook(createBookWithID(randomBook, 'random')));
  };

  const addRandomBookViaAPIHandler = () => {
    dispatch(fetchBook());
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            autoComplete="off"
            type="text"
            onChange={(e) => setTitleValue(e.target.value)}
            value={titleValue}
            id="title"
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            autoComplete="off"
            type="text"
            onChange={(e) => setAuthorValue(e.target.value)}
            value={authorValue}
            id="author"
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={addRandomBookHandler}>
          Add Random
        </button>
        <button type="submit" onClick={addRandomBookViaAPIHandler}>
          Add Random via API
        </button>
      </form>
    </div>
  );
};
