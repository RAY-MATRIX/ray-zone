import { createSlice } from '@reduxjs/toolkit';

// Define a user slice
const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
    clearUser: () => null,
  },
});
export default userSlice.reducer;
