import { apiSlice } from './apiSlice';

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: (_id) => `/users/${_id}`,
      providesTags: ['UserProfile'],
    }),

    resetPassword: builder.mutation({
      query: ({ id, password }) => ({
        url: `/users/${id}/reset`,
        method: 'PUT',
        body: {
          password,
        },
      }),
      invalidatesTags: ['UserProfile'],
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
      invalidatesTags: ['UserProfile'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserInfoQuery,
  useResetPasswordMutation,
  useSendResetEmailMutation,
  useEmailResetPasswordMutation,
} = userApi;
