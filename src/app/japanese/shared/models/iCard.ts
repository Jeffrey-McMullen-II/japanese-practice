import iKanji from "./iKanji";

export default interface iCard {
    face: string,
    back: string,
    translation?: string,
    kanji?: iKanji
}