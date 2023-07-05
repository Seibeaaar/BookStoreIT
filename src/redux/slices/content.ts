import { createSlice } from '@reduxjs/toolkit';
import { getHomeContent, getArticles } from '../thunks/content';
import { ContentReducer } from 'src/types/redux';
import { HomeContent, Article } from 'src/types/firebase';

const initialState: ContentReducer = {
  error: null,
  pending: false,
  homeContent: null,
  articles: [],
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
    builder.addCase(getArticles.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.articles = action.payload as Article[];
      state.pending = false;
    });
    builder.addCase(getArticles.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export default contentSlice.reducer;
