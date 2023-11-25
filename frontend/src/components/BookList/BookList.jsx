import { useSelector } from 'react-redux';
import './BookList.css';

export const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books avalible</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              <div className="book-info">
                {++i}. {book.titleValue} by <strong>{book.authorValue}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
