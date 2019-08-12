import authReducer from './authReducer';
import signUpReducer from './singUpReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
  firestore: firestoreReducer
});

export default rootReducer;
