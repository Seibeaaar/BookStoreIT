import { createSlice } from '@reduxjs/toolkit';
import { getHomeContent } from '../thunks/content';
import { ContentReducer } from 'src/types/redux';
import { HomeContent } from 'src/types/firebase';

const initialState: ContentReducer = {
  error: null,
  pending: false,
  homeContent: null,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomeContent.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getHomeContent.fulfilled, (state, action) => {
      state.homeContent = action.payload as HomeContent;
      state.pending = false;
    });
    builder.addCase(getHomeContent.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export default contentSlice.reducer;
