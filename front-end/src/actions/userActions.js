
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  userName: '',
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
    },
    UpdateUserName: (state, action) => {
      state.userName = action.payload.userName;
    },
  },
});

export const { setUser, UpdateUserName } = userSlice.actions;

export default userSlice.reducer;
