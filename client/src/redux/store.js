import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
// import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [thunk];


export default createStore(
  rootReducer,
  applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);


// process.env.NODE_ENV