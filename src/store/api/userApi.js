import { apiSlice } from './apiSlice';

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/users/auth',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

export const {
  //   useRegisterMutation,
  useLoginMutation,
} = userApi;
