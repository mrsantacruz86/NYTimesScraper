import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
// import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [thunk];

/* eslint-disable no-underscore-dangle */
export default createStore(
  rootReducer,
  compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
/* eslint-enable */