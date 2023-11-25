import { useDispatch, useSelector } from 'react-redux';

import { deleteBook } from '../../redux/books/actionCreators';

import './BookList.css';

export const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books avalible</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.titleValue} by <strong>{book.authorValue}</strong>
              </div>
              <div className="book-actions">
                <button
                  onClick={() => dispatch(deleteBook(book.id))}
                  type="button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
