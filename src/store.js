import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './store/reducers/rootReducer';

export const store = createStore(rootReducer,
  compose(applyMiddleware(thunk))
);
