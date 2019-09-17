import authReducer from './authReducer';
import signUpReducer from './singUpReducer';
import socialFeedReducer from './socialFeedReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
  socialFeed: socialFeedReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
