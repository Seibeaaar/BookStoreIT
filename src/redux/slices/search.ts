import { createSlice } from '@reduxjs/toolkit';
import { searchBooksByKeyword } from '../thunks/books';
import { SearchReducer } from 'src/types/redux';

const initialState: SearchReducer = {
  error: null,
  pending: false,
  items: [],
  searchKeyword: '',
  initial: true,
  totalResults: 0,
};

const searchSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cacheRequest(state, action) {
      state.searchKeyword = action.payload;
    },
    clearRequest(state) {
      state.searchKeyword = '';
      state.items = [];
      state.initial = true;
      state.totalResults = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchBooksByKeyword.pending, (state) => {
      state.initial = false;
      state.pending = true;
    });
    builder.addCase(searchBooksByKeyword.fulfilled, (state, action) => {
      const { books, total } = action.payload;
      state.items = books;
      state.totalResults = +total;
      state.pending = false;
    });
    builder.addCase(searchBooksByKeyword.rejected, (state, action) => {
      state.error = action.payload as string;
      state.pending = false;
    });
  },
});

export const { clearRequest, cacheRequest } = searchSlice.actions;

export default searchSlice.reducer;
