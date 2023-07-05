import { createSlice } from '@reduxjs/toolkit';
import { getSingleBook, getNewBooks } from '../thunks/books';
import { BookReducer } from 'src/types/redux';

const initialState: BookReducer = {
  feed: [],
  singleBook: null,
  error: null,
  pending: false,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    resetSingleBook(state) {
      state.singleBook = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSingleBook.fulfilled, (state, action) => {
      state.singleBook = action.payload;
      state.pending = false;
    });
    builder.addCase(getNewBooks.fulfilled, (state, action) => {
      state.feed = action.payload;
      state.pending = false;
    });
    builder.addCase(getNewBooks.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(getSingleBook.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(getNewBooks.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getSingleBook.pending, (state) => {
      state.pending = true;
    });
  },
});

export const { resetSingleBook } = bookSlice.actions;

export default bookSlice.reducer;
