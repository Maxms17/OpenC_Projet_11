
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  userName: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.token = action.payload.token;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
