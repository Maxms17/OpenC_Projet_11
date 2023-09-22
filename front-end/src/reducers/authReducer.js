
import { combineReducers } from 'redux';
import authReducer from '../actions/authActions';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
