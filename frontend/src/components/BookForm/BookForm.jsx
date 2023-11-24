import { useState } from 'react';
import './BookForm.css';

export const BookForm = () => {
  const [titleValue, setTitleValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (titleValue && authorValue) {
      setTitleValue('');
      setAuthorValue('');
    }

    // dispatch action
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
      </form>
    </div>
  );
};
