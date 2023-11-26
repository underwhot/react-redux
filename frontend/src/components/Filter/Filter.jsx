import { useDispatch, useSelector } from 'react-redux';
import {
  selectTitleFilter,
  setTitleFilter,
  selectAuthorFilter,
  setAuthorFilter,
  resetFilters,
} from '../../redux/slices/filterSlice';

import './Filter.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const titleFilterChangeHandler = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const authorFilterChangeHandler = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const resetFiltersHandler = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={titleFilter}
            onChange={titleFilterChangeHandler}
            type="text"
            placeholder="Filter by title..."
          />
        </div>
        <div className="filter-group">
          <input
            value={authorFilter}
            onChange={authorFilterChangeHandler}
            type="text"
            placeholder="Filter by author..."
          />
        </div>
        <button type="button" onClick={resetFiltersHandler}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};
