import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 0,
    title: 'First Card',
    content: 'this is the 1 card',
  },
  {
    id: 1,
    title: 'second Card',
    content: 'this is the 2 card',
  },
  {
    id: 2,
    title: 'third Card',
    content: 'this is the 3 card',
  },
];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    cardsSaved(state, action) {
      return action.payload;
    },

    // cardsSaved: (state, action) => action.payload,
    resetState: (state) => initialState,
    // resetState(state, action) {
    //   console.log('reset now');
    //   return initialState;
    // },
  },
});
export const { cardsSaved, resetState } = cardsSlice.actions;

export default cardsSlice.reducer;
