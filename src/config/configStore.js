import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({

});

const initialState = {};
export default createStore(
  rootReducer,
  initialState,
);
