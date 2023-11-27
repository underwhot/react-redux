import { useDispatch, useSelector } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';

import { deleteBook, toggleFavourite } from '../../redux/books/actionCreators';
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavouriteFilter,
} from '../../redux/slices/filterSlice';

import './BookList.css';

export const BookList = () => {
  const books = useSelector((state) => state.books);
  const filterTitle = useSelector(selectTitleFilter);
  const filterAuthor = useSelector(selectAuthorFilter);
  const onlyFavouriteFilter = useSelector(selectOnlyFavouriteFilter);
  const dispatch = useDispatch();

  const toggleFavouriteHadler = (id) => {
    dispatch(toggleFavourite(id));
  };

  const filtredBooks = books
    .filter((book) =>
      book.titleValue.toLowerCase().includes(filterTitle.trim().toLowerCase())
    )
    .filter((book) =>
      book.authorValue.toLowerCase().includes(filterAuthor.trim().toLowerCase())
    )
    .filter((book) => (onlyFavouriteFilter ? book.isFavourite : true));

  const highlightMatch = (text, filter) => {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, 'gi');

    return text.split(regex).map((substr, i) => {
      if (substr.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substr}
          </span>
        );
      }
      return substr;
    });
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books avalible</p>
      ) : (
        <ul>
          {filtredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {highlightMatch(book.titleValue, filterTitle)} by{' '}
                <strong>
                  {highlightMatch(book.authorValue, filterAuthor)}
                </strong>
              </div>
              <div className="book-actions">
                <span onClick={() => toggleFavouriteHadler(book.id)}>
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
