import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createBookWithID } from '../../utils/createBookWithID';
import axios from 'axios';

import { setError } from './errorSlice';

const initialState = [];

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      const randomIndex = Math.floor(Math.random() * res.data.length);
      const randomBook = res.data[randomIndex];
      return randomBook;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      throw error;
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithID(action.payload, 'API'));
      }
    });
  },
});

export const { setAddBook, setDeleteBook, setToggleFavourite } =
  booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
