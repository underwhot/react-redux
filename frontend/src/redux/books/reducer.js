import * as a from './actionTypes';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];

    case a.DELETE_BOOK:
      return state.filter((item) => item.id !== action.payload);

    case a.TOGGLE_FAVOURITE:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, isFavourite: !item.isFavourite }
          : item
      );

    default:
      return state;
  }
};

export default booksReducer;
