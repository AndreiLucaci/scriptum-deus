import map from "./mapper";
import bibleRaw from "./bible.json";
import {
  BookRaw,
  Chapter,
  BibleResponse,
  Verse,
  DayResponse,
} from "../../types";

const testChapterRange = new RegExp(/^([1-4a-zA-Z-]+?) (\d+)-(\d+)$/m);
const testChapterVerse = new RegExp(/^([1-4a-zA-Z-]+?) (\d+):(\d+)-(\d+)$/m);
const testWholeChapter = new RegExp(/^([1-4a-zA-Z-]+) (\d+)$/m);
const testWholeBook = new RegExp(/^([1-4a-zA-Z-]+)$/m);

const bible: BookRaw[] = bibleRaw as BookRaw[];

const bibleResponse = (book: string, chapters: Chapter[]): BibleResponse => ({
  book,
  chapters,
});
const createChapter = (nr: number, verses: Verse[]): Chapter => ({
  number: nr,
  verses,
});
const createVerse = (nr: number, verse: string): Verse => ({
  number: nr,
  verse,
});

const getBook = (abbrev: string): BookRaw => {
  const abbrevB = map(abbrev);
  const bbook = bible.find((x: BookRaw) => x.abbrev === abbrevB);
  return bbook as BookRaw;
};

const parseChapterRange = (input: string) => {
  const [_, book, start, end] = input.split(testChapterRange);
  const bbook = getBook(book);
  const bres = bibleResponse(bbook.name, []);
  for (let i = parseInt(start) - 1; i <= parseInt(end) - 1; i++) {
    bres.chapters.push(
      createChapter(
        i + 1,
        bbook.chapters[i].map((v: string, i: number) => {
          return createVerse(i + 1, v);
        })
      )
    );
  }

  return bres;
};

const parseChapterVerse = (input: string) => {
  const [_, book, ichapter, start, end] = input.split(testChapterVerse);
  const bbook = getBook(book);
  const bres = bibleResponse(bbook.name, []);
  const bchapter = bbook.chapters[parseInt(ichapter) - 1];
  const verses = [];
  for (let i = parseInt(start) - 1; i <= parseInt(end) - 1; i++) {
    verses.push(createVerse(i + 1, bchapter[i]));
  }
  bres.chapters.push(createChapter(parseInt(ichapter), verses));

  return bres;
};

const parseWholeBook = (input: string) => {
  const [_, book] = input.split(testWholeBook);
  const bbook = getBook(book);

  const bres = bibleResponse(
    bbook.name,
    bbook.chapters.map((x, i) => {
      return createChapter(
        i + 1,
        x.map((y, j) => {
          return createVerse(j + 1, y);
        })
      );
    })
  );

  return bres;
};

const parseWholeChapter = (input: string) => {
  const [_, book, pChapter] = input.split(testWholeChapter);
  const bbook = getBook(book);

  const bres = bibleResponse(bbook.name, [
    createChapter(
      parseInt(pChapter),
      bbook.chapters[parseInt(pChapter) - 1].map((x: string, i: number) => {
        return createVerse(i + 1, x);
      })
    ),
  ]);

  return bres;
};

const parseText = (input: string): BibleResponse | undefined => {
  const trimmedInput = input.trim();

  if (testChapterRange.test(trimmedInput)) {
    return parseChapterRange(trimmedInput);
  }

  if (testChapterVerse.test(trimmedInput)) {
    return parseChapterVerse(trimmedInput);
  }

  if (testWholeChapter.test(trimmedInput)) {
    return parseWholeChapter(trimmedInput);
  }

  if (testWholeBook.test(trimmedInput)) {
    return parseWholeBook(trimmedInput);
  }
};

export const parse = (input: string): DayResponse => {
  const [oldT, newT] = input.split(";").map((x) => x.trim());

  const parsedOldT = parseText(oldT);
  const parsedNewT = parseText(newT);

  return {
    oldT: parsedOldT as BibleResponse,
    newT: parsedNewT as BibleResponse,
  };
};

export default parse;
