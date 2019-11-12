import authReducer from './authReducer';
import signUpReducer from './singUpReducer';
import createRequestReducer from './serviceRequestReducer'
import socialFeedReducer from './socialFeedReducer';
import apartmentInfoReducer from './apartmentInfoReducer';
import vehicleInfoReducer from './vehicleInfoReducer';
import marketPlaceReducer from './marketPlaceReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
  createRequest: createRequestReducer,
  socialFeed: socialFeedReducer,
  marketPlace: marketPlaceReducer,
  apartmentInfo: apartmentInfoReducer,
  vehicleInfo: vehicleInfoReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
