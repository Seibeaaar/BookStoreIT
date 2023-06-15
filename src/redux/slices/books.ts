import { createSlice } from '@reduxjs/toolkit';
import {
  getSingleBook,
  getNewBooks,
  seachBooksByKeyword,
} from '../thunks/books';
import { BookReducer } from 'src/types/redux';

const initialState: BookReducer = {
  feed: [],
  singleBook: null,
  searchResults: [],
  error: null,
  pending: false,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSingleBook.fulfilled, (state, action) => {
      state.singleBook = action.payload;
      state.pending = false;
    });
    builder.addCase(getNewBooks.fulfilled, (state, action) => {
      state.feed = action.payload;
      state.pending = false;
    });
    builder.addCase(seachBooksByKeyword.fulfilled, (state, action) => {
      state.searchResults = action.payload;
      state.pending = false;
    });
    builder.addCase(seachBooksByKeyword.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(getNewBooks.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(getSingleBook.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(seachBooksByKeyword.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getNewBooks.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getSingleBook.pending, (state) => {
      state.pending = true;
    });
  },
});

export default bookSlice.reducer;
