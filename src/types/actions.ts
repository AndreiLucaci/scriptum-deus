import { Action as ReduxAction } from "redux";

export type Action<T extends any = void> = ReduxAction<string> & {
  payload?: T;
};

export enum BibleActions {
  NEW_DAILY_TEXT = "NEW_DAILY_TEXT",
}
