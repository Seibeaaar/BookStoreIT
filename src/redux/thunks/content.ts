import FirebaseAPI from 'src/api/firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { HomeContent, Article } from 'src/types/firebase';

export const getHomeContent = createAsyncThunk(
  'content/home',
  async (payload, { rejectWithValue }) => {
    try {
      const content =
        (await FirebaseAPI.getHomeContent()) as unknown as HomeContent;
      return content;
    } catch (e: any) {
      rejectWithValue(e.message);
    }
  }
);

export const getArticles = createAsyncThunk(
  'content/articles',
  async (payload, { rejectWithValue }) => {
    try {
      const articles =
        (await FirebaseAPI.getArticles()) as unknown as Article[];
      return articles;
    } catch (e: any) {
      rejectWithValue(e.message);
    }
  }
);
