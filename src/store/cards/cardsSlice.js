import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 0,
    title: 'First Card',
    content: 'this is the 1 card',
    probability: 0.2,
  },
  {
    id: 1,
    title: 'second Card',
    content: 'this is the 2 card',
    probability: 0.3,
  },
  {
    id: 2,
    title: 'third Card',
    content: 'this is the 3 card',
    probability: 0.5,
  },
];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
});

export default cardsSlice.reducer;
