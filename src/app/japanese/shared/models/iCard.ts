import iKanji from "./iKanji";

export default interface iCard {
    strokes?: number,
    face: string,
    back: string | iKanji,
    translation?: string
}
