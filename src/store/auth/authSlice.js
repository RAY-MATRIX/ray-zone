import { createSlice } from '@reduxjs/toolkit';

// Define a user slice
const authSlice = createSlice({
  name: 'user',
  initialState: { userId: null, token: null },
  reducers: {
    setUser: (state, action) => {
      const { _id, token, role } = action.payload.data;
      state = { ...state, userId: _id, token, role };
      localStorage.setItem(
        'user',
        JSON.stringify({
          token,
        })
      );
    },
    logOut: (state, action) => {
      state = {
        token: null,
        userId: null,
      };
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
