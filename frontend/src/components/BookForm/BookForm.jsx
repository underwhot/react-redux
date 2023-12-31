import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setAddBook,
  fetchBook,
  selectIsLoadingViaAPI,
} from '../../redux/slices/booksSlice';
import { createBookWithID } from '../../utils/createBookWithID';
import { setError } from '../../redux/slices/errorSlice';
import { FaSpinner } from 'react-icons/fa';

import booksData from '../../data/books.json';

import './BookForm.css';

export const BookForm = () => {
  const [titleValue, setTitleValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingViaAPI);

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
    } else {
      dispatch(setError('Title and author is empty!'));
    }
  };

  const addRandomBookHandler = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    dispatch(setAddBook(createBookWithID(randomBook, 'random')));
  };

  const addRandomBookViaAPIHandler = () => {
    dispatch(fetchBook('https://654fb2ee358230d8f0cda05a.mockapi.io/books'));
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
        <button
          disabled={isLoading}
          type="button"
          onClick={addRandomBookViaAPIHandler}
        >
          {isLoading ? (
            <>
              <span>Loading book...</span>
              <FaSpinner className="spinner"></FaSpinner>
            </>
          ) : (
            'Add Random via API'
          )}
        </button>
      </form>
    </div>
  );
};
