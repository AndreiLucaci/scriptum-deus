import { DailyTextResponse } from "../types";
import { passage, parse } from "./bible";

export const getText = (date = undefined) => {
  const passageResponse = passage(date);

  const response = {
    ...passageResponse,
    text: parse(passageResponse.forToday),
  };

  return response;
};

interface IBibleService {
  getText(date: Date | undefined): DailyTextResponse;
}

class BibleService implements IBibleService {
  getText(date: Date | undefined): DailyTextResponse {
    const passageResponse = passage(date);

    const response: DailyTextResponse = {
      ...passageResponse,
      text: parse(passageResponse.forToday),
    };

    return response;
  }
}

export const bibleService: IBibleService = new BibleService();
