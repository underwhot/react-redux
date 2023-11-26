import { useDispatch, useSelector } from 'react-redux';
import {
  selectTitleFilter,
  setTitleFilter,
  selectAuthorFilter,
  setAuthorFilter,
  toggleOnlyFavourite,
  selectOnlyFavouriteFilter,
  resetFilters,
} from '../../redux/slices/filterSlice';

import './Filter.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavouriteFilter = useSelector(selectOnlyFavouriteFilter);

  const titleFilterChangeHandler = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const authorFilterChangeHandler = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const onlyFavouriteFilterHandler = (e) => {
    dispatch(toggleOnlyFavourite());
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
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavouriteFilter}
              onChange={onlyFavouriteFilterHandler}
            />
            Only favourite
          </label>
        </div>
        <button type="button" onClick={resetFiltersHandler}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};
