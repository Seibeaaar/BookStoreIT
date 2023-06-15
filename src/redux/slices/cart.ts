import { createSlice } from '@reduxjs/toolkit';
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
    addItem(state, action) {
      state.items.push(action.payload);
      const {
        book: { price },
        quantity,
      } = action.payload;
      state.total += calculateBookTotal(price, quantity);
    },
    removeItem(state, action) {
      const {
        book: { price, isbn13: removedIsbn },
        quantity,
      } = state.items.find(
        (item) => item.book.isbn13 === action.payload
      ) as CartItem;
      state.total -= calculateBookTotal(price, quantity);
      state.items = state.items.filter(
        (item) => item.book.isbn13 !== removedIsbn
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
