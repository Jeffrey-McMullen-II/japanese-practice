import { HiraganaCharacters } from "./hiragana-characters";
import { HiraganaWords } from "./hiragana-words";
import iCard from "./iCard";

export const FlashCardGroups: Map<string, iCard[]> = new Map<string, iCard[]>([
  ['hiragana-characters', HiraganaCharacters],
  ['hiragana-words', HiraganaWords]
]);