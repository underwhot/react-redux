import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setAddBook: (state, action) => {
      return [...state, action.payload];
    },
    setDeleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    setToggleFavourite: (state, action) => {
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavourite: !book.ifFavourite }
          : book
      );
    },
  },
});

export const { setAddBook, setDeleteBook, setToggleFavourite } =
  booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
