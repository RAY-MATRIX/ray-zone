import { apiSlice } from './apiSlice';

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: (_id) => `/users/${_id}`,
      providesTags: ['UserDetails'],
    }),

    getUserGames: builder.query({
      query: (_id) => `/users/${_id}/games`,
      providesTags: ['UserGames'],
    }),

    getUserCards: builder.query({
      query: (_id) => `/users/${_id}/cards`,
      providesTags: ['UserCards'],
    }),

    resetPassword: builder.mutation({
      query: ({ id, password }) => ({
        url: `/users/${id}/reset`,
        method: 'PUT',
        body: {
          password,
        },
      }),
      invalidatesTags: ['UserDetails'],
    }),

    sendResetEmail: builder.mutation({
      query: ({ email }) => ({
        url: `/users/forget-password`,
        method: 'POST',
        body: {
          email,
        },
      }),
    }),

    emailResetPassword: builder.mutation({
      query: ({ id, token, password }) => ({
        url: `/users/reset-password/${id}/${token}/`,
        method: 'PUT',
        body: {
          password,
        },
      }),
      invalidatesTags: ['UserDetails'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserInfoQuery,
  useGetUserGamesQuery,
  useGetUserCardsQuery,
  useResetPasswordMutation,
  useSendResetEmailMutation,
  useEmailResetPasswordMutation,
} = userApi;
