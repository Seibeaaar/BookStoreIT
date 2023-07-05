import { Cart } from './cart';
import { Book, BookPreview } from './books';
import { Article, HomeContent } from './firebase';

export interface CartReducer extends Cart {
  error: string | null;
  pending: boolean;
}

export interface BookReducer {
  error: string | null;
  pending: boolean;
  singleBook: Book | null;
  feed: BookPreview[];
}

export interface SearchReducer {
  error: string | null;
  pending: boolean;
  searchKeyword: string;
  items: BookPreview[];
  initial: boolean;
  totalResults: number;
}

export interface ContentReducer {
  homeContent: HomeContent | null;
  error: string | null;
  pending: boolean;
  articles: Article[];
}

export interface AppStore {
  books: BookReducer;
  cart: CartReducer;
  content: ContentReducer;
  search: SearchReducer;
}
