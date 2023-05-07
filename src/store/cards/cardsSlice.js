import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Card 1',
    content: 'This is card 1',
  },
  {
    id: '2',
    title: 'Card 2',
    content: 'This is card 2',
  },
  {
    id: '3',
    title: 'Card 3',
    content: 'This is card 3',
  },
  {
    id: '4',
    title: 'Card 4',
    content: 'This is card 4',
  },
  {
    id: '5',
    title: 'Card 5',
    content: 'This is card 5',
  },
];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    saveCard(state, action) {
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
export const { saveCard, resetState } = cardsSlice.actions;

export default cardsSlice.reducer;
