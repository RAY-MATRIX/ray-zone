import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isAuthenticated } from '../../utils/auth.js';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DEV_SERVER_URL,
    prepareHeaders: (headers, { getState }) => {
      const checked = localStorage.getItem('checked');
      if (isAuthenticated()) {
        if (checked === 'true') {
          const user = JSON.parse(localStorage.getItem('user'));
          headers.set('authorization', `Bearer ${user.token}`);
          return headers;
        }
        const user = JSON.parse(sessionStorage.getItem('user'));
        headers.set('authorization', `Bearer ${user.token}`);
        return headers;
      }
      return headers;
    },
  }),
  tagTypes: ['UserProfile', 'CardInfo'],
  endpoints: () => ({}),
});

export default apiSlice.reducer;
