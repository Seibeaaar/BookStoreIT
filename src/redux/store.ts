import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import bookReducer from './slices/books';
import cartReducer from './slices/cart';
import contentReducer from './slices/content';
import searchReducer from './slices/search';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['search', 'books'],
};

const rootReducer = combineReducers({
  books: bookReducer,
  cart: cartReducer,
  content: contentReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
