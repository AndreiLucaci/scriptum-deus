import { Action, BibleActions } from "../../types";

export const bibleReducer = (state: any, action: Action) => {
  switch (action.type) {
    case BibleActions.NEW_DAILY_TEXT:
      return state;
    default:
      return state;
  }
};
