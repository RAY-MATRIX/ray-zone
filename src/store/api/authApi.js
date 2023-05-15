import { apiSlice } from './apiSlice';

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/users/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
    googleLogin: builder.mutation({
      query: ({ accessToken }) => ({
        url: '/users/login/google',
        method: 'POST',
        body: {
          token: accessToken,
        },
      }),
    }),
  }),
});

export const {
  //   useRegisterMutation,
  useLoginMutation,
  useGoogleLoginMutation,
} = authApi;
