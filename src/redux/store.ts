import { createStore } from "redux";
import { bibleReducer } from "./reducers";

export const store = createStore(bibleReducer);
