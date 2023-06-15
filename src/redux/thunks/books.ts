import { createAsyncThunk } from '@reduxjs/toolkit';
import BooksAPI from 'src/api/books';

export const getSingleBook = createAsyncThunk(
  'books/single',
  async (isbn: string, { rejectWithValue }) => {
    try {
      const book = await BooksAPI.getSingleBook(isbn);
      return book;
    } catch (e: any) {
      rejectWithValue(e.message);
    }
  }
);

export const getNewBooks = createAsyncThunk(
  'books/new',
  async (payload, { rejectWithValue }) => {
    try {
      const books = await BooksAPI.getNewBooks();
      return books;
    } catch (e: any) {
      rejectWithValue(e.message);
    }
  }
);

export const seachBooksByKeyword = createAsyncThunk(
  'books/search',
  async (keyword: string, { rejectWithValue }) => {
    try {
      const results = await BooksAPI.searchByKeyword(keyword);
      return results;
    } catch (e: any) {
      rejectWithValue(e.message);
    }
  }
);
