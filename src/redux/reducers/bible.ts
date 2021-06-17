import { BibleActions, Action } from "../../types";

export const bibleReducer = (state: any, action: Action) => {
  switch (action.type) {
    case BibleActions.NEW_DAILY_TEXT:
      return { ...state, forToday: action.payload };
    default:
      return state;
  }
};
