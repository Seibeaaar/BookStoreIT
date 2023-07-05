import { createAsyncThunk } from '@reduxjs/toolkit';
import BooksAPI from 'src/api/books';
import { SearchRequest } from 'src/types/search';

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
  async (_payload, { rejectWithValue }) => {
    try {
      const books = await BooksAPI.getNewBooks();
      return books;
    } catch (e: any) {
      rejectWithValue(e.message);
    }
  }
);

export const searchBooksByKeyword = createAsyncThunk(
  'books/search',
  async ({ keyword, page }: SearchRequest, { rejectWithValue }) => {
    try {
      const results = await BooksAPI.searchByKeyword(keyword, page);
      return results;
    } catch (e: any) {
      rejectWithValue(e.message);
    }
  }
);
