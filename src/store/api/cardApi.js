import { apiSlice } from './apiSlice';

const cardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCardInfo: builder.query({
      query: (_id) => `/cards/${_id}`,
      providesTags: ['CardDetails'],
    }),

    createCard: builder.mutation({
      query: ({ authorId, title, content }) => ({
        url: `/cards/create`,
        method: 'POST',
        body: {
          authorId,
          title,
          content,
        },
      }),
      invalidatesTags: ['UserCards'],
    }),

    updateCard: builder.mutation({
      query: ({ id, title, content }) => ({
        url: `/cards/${id}`,
        method: 'PUT',
        body: {
          title,
          content,
        },
      }),
      invalidatesTags: ['UserCards', 'CardDetails'],
    }),

    deleteCard: builder.mutation({
      query: ({ id }) => ({
        url: `/cards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UserCards', 'CardDetails'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCardInfoQuery,
  useCreateCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} = cardApi;
