import { apiSlice } from './apiSlice';

const gameApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGameInfo: builder.query({
      query: (_id) => `/games/${_id}`,
      providesTags: ['GameDetails'],
    }),

    preCreateGame: builder.mutation({
      query: ({ authorId, title }) => ({
        url: `/games/`,
        method: 'POST',
        body: {
          authorId,
          title,
        },
      }),
      invalidatesTags: ['UserGames'],
    }),

    createGame: builder.mutation({
      query: ({ authorId, title, cardsIncluded, numberOfDraws }) => ({
        url: `/games/create`,
        method: 'POST',
        body: {
          authorId,
          title,
          cardsIncluded,
          numberOfDraws,
        },
      }),
      invalidatesTags: ['UserGames'],
    }),

    updateGame: builder.mutation({
      query: ({ id, title, cardsIncluded, numberOfDraws }) => ({
        url: `/games/${id}`,
        method: 'PUT',
        body: {
          title,
          cardsIncluded,
          numberOfDraws,
        },
      }),
      invalidatesTags: ['UserGames', 'GameDetails'],
    }),

    deleteGame: builder.mutation({
      query: ({ id }) => ({
        url: `/games/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UserGames', 'GameDetails'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetGameInfoQuery,
  usePreCreateGameMutation,
  useCreateGameMutation,
  useUpdateGameMutation,
  useDeleteGameMutation,
} = gameApi;
