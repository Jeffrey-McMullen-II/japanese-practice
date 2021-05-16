import { HiraganaCharacters } from "./hiragana-characters";
import { HiraganaVocabulary } from "./hiragana-vocabulary";
import { KatakanaCharacters } from "./katakana-characters";
import { KatakanaVocabulary } from "./katakana-vocabulary";
import { KanjiRadicalsN5 } from "./kanji-radicals-n5";
import { KanjiVocabularyN5 } from "./kanji-vocabulary-n5";
import iCard from "./iCard";

export const FlashCardGroups: Map<string, iCard[]> = new Map<string, iCard[]>([
  ['hiragana-characters', HiraganaCharacters],
  ['hiragana-vocabulary', HiraganaVocabulary],
  ['katakana-characters', KatakanaCharacters],
  ['katakana-vocabulary', KatakanaVocabulary],
  ['kanji-radicals-n5', KanjiRadicalsN5],
  ['kanji-vocabulary-n5', KanjiVocabularyN5]
]);