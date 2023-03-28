import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  cardsSelected: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    gameCardsUpdate(state, action) {
      // const { id, weight } = action.payload;
      // const itemIndex = state.cardsSelected.findIndex((item) => item.id === id);
      // if (itemIndex !== -1) {
      //   state.cardsSelected[itemIndex].weight = weight;
      // } else {
      //   state.cardsSelected.push({ id, weight });
      // }
      state.cardsSelected = action.payload;
    },

    gameNameUpdate(state, action) {
      state.title = action.payload;
    },

    resetGameState: (state) => initialState,
  },
});
export const { gameCardsUpdate, gameNameUpdate, resetGameState } =
  gameSlice.actions;

export default gameSlice.reducer;
