import { Cart } from './cart';
import { Book, BookPreview } from './books';

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

export interface AppStore {
  books: BookReducer;
  cart: CartReducer;
}
