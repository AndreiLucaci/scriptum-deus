export type Program = {
  [key: number]: {
    [key: number]: string;
  };
};

export type Verse = {
  number: number;
  verse: string;
};

export type Chapter = {
  number: number;
  verses: Verse[];
};

export type BookChapterRaw = string[][];

export type BookRaw = {
  abbrev: string;
  chapters: BookChapterRaw;
  name: string;
};

export type BibleResponse = {
  book: string;
  chapters: Chapter[];
};

export type DayResponse = {
  oldT: BibleResponse;
  newT: BibleResponse;
};

export type ProgramResponse = {
  forToday: string;
  display: {
    static: string;
    date: string;
  };
};

export type DailyTextResponse = ProgramResponse & {
  text: DayResponse;
};
