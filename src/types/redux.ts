import { Cart } from './cart';
import { Book, BookPreview } from './books';
import { HomeContent } from './firebase';

export interface CartReducer extends Cart {
  error: string | null;
  pending: boolean;
}

export interface BookReducer {
  error: string | null;
  pending: boolean;
  singleBook: Book | null;
  feed: BookPreview[];
  searchResults: BookPreview[];
}

export interface ContentReducer {
  homeContent: HomeContent | null;
  error: string | null;
  pending: boolean;
}

export interface AppStore {
  books: BookReducer;
  cart: CartReducer;
  content: ContentReducer;
}
