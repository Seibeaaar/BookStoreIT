import FirebaseAPI from 'src/api/firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { HomeContent } from 'src/types/firebase';

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
