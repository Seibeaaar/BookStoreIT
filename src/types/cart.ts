import { BookPreview } from './books';

export interface CartItem {
  book: BookPreview;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
