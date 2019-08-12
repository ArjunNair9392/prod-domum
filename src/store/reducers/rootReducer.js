import authReducer from './authReducer';
import signUpReducer from './singUpReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
