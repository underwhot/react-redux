import { useDispatch, useSelector } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { selectTitleFilter } from '../../redux/slices/filterSlice';

import { deleteBook, toggleFavourite } from '../../redux/books/actionCreators';

import './BookList.css';

export const BookList = () => {
  const books = useSelector((state) => state.books);
  const filterTitle = useSelector(selectTitleFilter);

  const dispatch = useDispatch();

  const toggleFavouriteHahdler = (id) => {
    dispatch(toggleFavourite(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books avalible</p>
      ) : (
        <ul>
          {books
            .filter((book) =>
              book.titleValue.toLowerCase().includes(filterTitle.trim().toLowerCase())
            )
            .map((book, i) => (
              <li key={book.id}>
                <div className="book-info">
                  {++i}. {book.titleValue} by{' '}
                  <strong>{book.authorValue}</strong>
                </div>
                <div className="book-actions">
                  <span onClick={() => toggleFavouriteHahdler(book.id)}>
                    {book.isFavourite ? (
                      <BsBookmarkStarFill className="star-icon" />
                    ) : (
                      <BsBookmarkStar className="star-icon" />
                    )}
                  </span>

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
