import { HiraganaCharacters } from "./hiragana-characters";
import { HiraganaVocabulary } from "./hiragana-vocabulary";
import { KatakanaCharacters } from "./katakana-characters";
import { KatakanaVocabulary } from "./katakana-vocabulary";
import iCard from "./iCard";

export const FlashCardGroups: Map<string, iCard[]> = new Map<string, iCard[]>([
  ['hiragana-characters', HiraganaCharacters],
  ['hiragana-vocabulary', HiraganaVocabulary],
  ['katakana-characters', KatakanaCharacters],
  ['katakana-vocabulary', KatakanaVocabulary]
]);