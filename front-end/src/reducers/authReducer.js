
import { combineReducers } from 'redux';
import authReducer from '../actions/authActions';
import userReducer from '../actions/userActions';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
