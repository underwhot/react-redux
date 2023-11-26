import * as a from './actionTypes';

export const addBook = (newBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  };
};

export const deleteBook = (id) => {
  return {
    type: a.DELETE_BOOK,
    payload: id,
  };
};

export const toggleFavourite = (id) => {
  return {
    type: a.TOGGLE_FAVOURITE,
    payload: id,
  };
};
