import { createSlice, current } from '@reduxjs/toolkit';
import { CartReducer } from 'src/types/redux';
import { CartItem } from 'src/types/cart';
import { calculateBookTotal } from 'src/utils/books';

const initialState: CartReducer = {
  error: null,
  pending: false,
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
      console.log('push');
      const {
        book: { price },
        quantity,
      } = action.payload;
      state.total += calculateBookTotal(price, quantity);
    },
    removeFromCart(state, action) {
      const currentState = current(state);
      const removedItem = currentState.items.find(
        (item) => item.book.isbn13 === action.payload
      ) as CartItem;
      const { book, quantity } = removedItem;
      state.total -= calculateBookTotal(book.price, quantity);
      const newCartState = currentState.items.filter((item) => {
        return item.book.isbn13 !== book.isbn13;
      });
      state.items = newCartState;
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
