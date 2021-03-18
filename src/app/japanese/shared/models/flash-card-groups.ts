import { HiraganaCharacters } from "./hiragana-characters";
import { HiraganaWords } from "./hiragana-words";
import { KatakanaCharacters } from "./katakana-characters";
import { KatakanaWords } from "./katakana-words";
import iCard from "./iCard";

export const FlashCardGroups: Map<string, iCard[]> = new Map<string, iCard[]>([
  ['hiragana-characters', HiraganaCharacters],
  ['hiragana-words', HiraganaWords],
  ['katakana-characters', KatakanaCharacters],
  ['katakana-words', KatakanaWords]
]);