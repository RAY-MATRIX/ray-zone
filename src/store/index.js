// import { apiSlice } from './api/apiSlice';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import cardsReducer from './cards/cardsSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  cards: cardsReducer,
  //   [apiSlice.reducerPath]: apiSlice.reducer,
});

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',

  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(apiSlice.middleware),
});
