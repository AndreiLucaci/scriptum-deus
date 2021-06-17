import { createStore, combineReducers } from "redux";
import { bibleReducer } from "./reducers";

const reducers = {
  bible: bibleReducer,
};

const combinedReducers = combineReducers(reducers);

export const store = createStore(combinedReducers);
