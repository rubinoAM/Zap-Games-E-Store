//Reminder: This file doesn't care about react, so you don't need to import it.
import { combineReducers } from 'redux';
import authReducer from './authReducer';
const rootReducer = combineReducers({
    auth:authReducer,
});

export default rootReducer;