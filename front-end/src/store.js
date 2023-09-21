// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/authReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
