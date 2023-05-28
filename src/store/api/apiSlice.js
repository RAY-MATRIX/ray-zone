import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { isAuthenticated } from '../../utils/auth.js';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      if (isAuthenticated()) {
        const user = JSON.parse(localStorage.getItem('auth'));
        headers.set('authorization', `Bearer ${user.token}`);
        return headers;
      }
      return headers;
    },
  }),
  tagTypes: [
    'UserDetails',
    'UserGames',
    'GameDetails',
    'UserCards',
    'CardDetails',
  ],
  endpoints: () => ({}),
});
