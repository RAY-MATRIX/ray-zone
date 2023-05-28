import { createSlice } from '@reduxjs/toolkit';

// Define a user slice
const authSlice = createSlice({
  name: 'auth',
  initialState: { userId: null, token: null, role: null, isLoggedIn: false },
  reducers: {
    setUser: (state, action) => {
      const { _id, token, role } = action.payload.data;
      localStorage.setItem(
        'auth',
        JSON.stringify({
          token,
        })
      );
      return { ...state, userId: _id, token, role, isLoggedIn: true };
    },
    clearUser: (state, action) => {
      state = {
        token: null,
        userId: null,
        role: null,
        isLoggedIn: false,
      };
      localStorage.removeItem('auth');
      return state;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
