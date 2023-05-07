import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameName: '',
  gameCardsSelected: [],
  gameLink: '',
  draws: 1,
  isLoading: false,
  error: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    gameNameUpdate(state, action) {
      state.gameName = action.payload;
    },
    gameUpdate(state, action) {
      const { cardsSelected, draws } = action.payload;
      state.gameCardsSelected = cardsSelected;
      state.draws = draws;
    },
    // gameCreateStart: (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // gameCreateSuccess: (state, action) => {
    //   state.isLoading = false;
    //   state.gameLink = action.payload.gameLink;
    // },
    // gameCreateFailure: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    selectCard: (state, action) => {
      const selectedCardIndex = state.gameCardsSelected.findIndex(
        (item) => item.id === action.payload.id
      );
      if (selectedCardIndex === -1) {
        const tempCard = { ...action.payload };
        tempCard.rarity = 1 / 100;
        tempCard.quantity = 1;
        state.gameCardsSelected.push(tempCard);
      }
    },
    unselectCard: (state, action) => {
      const selectedCardIndex = state.gameCardsSelected.findIndex(
        (item) => item.id === action.payload.id
      );
      if (selectedCardIndex !== -1) {
        state.gameCardsSelected = state.gameCardsSelected.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    resetGameState: (state) => initialState,
  },
});
export const {
  gameNameUpdate,
  gameUpdate,
  // gameCreateStart,
  // gameCreateSuccess,
  // gameCreateFailure,
  resetGameState,
  selectCard,
  unselectCard,
} = gameSlice.actions;

export default gameSlice.reducer;
