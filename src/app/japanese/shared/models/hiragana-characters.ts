import iCard from "./iCard";

export const HiraganaCharacters: iCard[] = [

    /* The 46 Basic Characters */
    {face: 'あ', back: 'a', translation: ''},
    {face: 'い', back: 'i', translation: 'Stomach'},
    {face: 'う', back: 'u', translation: ''},
    {face: 'え', back: 'e', translation: ''},
    {face: 'お', back: 'o', translation: ''},

    {face: 'か', back: 'ka', translation: ''},
    {face: 'き', back: 'ki', translation: ''},
    {face: 'く', back: 'ku', translation: ''},
    {face: 'け', back: 'ke', translation: ''},
    {face: 'こ', back: 'ko', translation: ''},

    {face: 'さ', back: 'sa', translation: ''},
    {face: 'し', back: 'shi', translation: ''},
    {face: 'す', back: 'su', translation: ''},
    {face: 'せ', back: 'se', translation: ''},
    {face: 'そ', back: 'so', translation: ''},

    {face: 'た', back: 'ta', translation: ''},
    {face: 'ち', back: 'chi', translation: ''},
    {face: 'つ', back: 'tsu', translation: ''},
    {face: 'て', back: 'te', translation: ''},
    {face: 'と', back: 'to', translation: ''},

    {face: 'な', back: 'na', translation: ''},
    {face: 'に', back: 'ni', translation: ''},
    {face: 'ぬ', back: 'nu', translation: ''},
    {face: 'ね', back: 'ne', translation: ''},
    {face: 'の', back: 'no', translation: ''},

    {face: 'は', back: 'ha', translation: ''},
    {face: 'ひ', back: 'hi', translation: ''},
    {face: 'ふ', back: 'fu', translation: ''},
    {face: 'へ', back: 'he', translation: ''},
    {face: 'ほ', back: 'ho', translation: ''},

    {face: 'ま', back: 'ma', translation: ''},
    {face: 'み', back: 'mi', translation: ''},
    {face: 'む', back: 'mu', translation: ''},
    {face: 'め', back: 'me', translation: ''},
    {face: 'も', back: 'mo', translation: ''},

    {face: 'や', back: 'ya', translation: ''},
    {face: 'ゆ', back: 'yu', translation: ''},
    {face: 'よ', back: 'yo', translation: ''},

    {face: 'ら', back: 'ra', translation: ''},
    {face: 'り', back: 'ri', translation: ''},
    {face: 'る', back: 'ru', translation: ''},
    {face: 'れ', back: 're', translation: ''},
    {face: 'ろ', back: 'ro', translation: ''},

    {face: 'わ', back: 'wa', translation: ''},
    {face: 'を', back: 'wo', translation: ''},

    {face: 'ん', back: 'n', translation: ''},

    /* 濁音 (dakuon) and 半濁音 (handakuon) */
    {face: 'が', back: 'ga', translation: ''},
    {face: 'ぎ', back: 'gi', translation: ''},
    {face: 'ぐ', back: 'gu', translation: ''},
    {face: 'げ', back: 'ge', translation: ''},
    {face: 'ご', back: 'go', translation: ''},

    {face: 'ざ', back: 'za', translation: ''},
    {face: 'じ', back: 'ji', translation: ''},
    {face: 'ず', back: 'zu', translation: ''},
    {face: 'ぜ', back: 'ze', translation: ''},
    {face: 'ぞ', back: 'zo', translation: ''},

    {face: 'だ', back: 'da', translation: ''},
    {face: 'ぢ', back: 'ji', translation: ''},
    {face: 'づ', back: 'zu', translation: ''},
    {face: 'で', back: 'de', translation: ''},
    {face: 'ど', back: 'do', translation: ''},

    {face: 'ば', back: 'ba', translation: ''},
    {face: 'び', back: 'bi', translation: ''},
    {face: 'ぶ', back: 'bu', translation: ''},
    {face: 'べ', back: 'be', translation: ''},
    {face: 'ぼ', back: 'bo', translation: ''},

    {face: 'ぱ', back: 'pa', translation: ''},
    {face: 'ぴ', back: 'pi', translation: ''},
    {face: 'ぷ', back: 'pu', translation: ''},
    {face: 'ぺ', back: 'pe', translation: ''},
    {face: 'ぽ', back: 'po', translation: ''},

    /* 拗音 (youon) */
    {face: 'きゃ', back: 'kya', translation: ''},
    {face: 'きゅ', back: 'kyu', translation: ''},
    {face: 'きょ', back: 'kyo', translation: ''},

    {face: 'しゃ', back: 'sha', translation: ''},
    {face: 'しゅ', back: 'shu', translation: ''},
    {face: 'しょ', back: 'sho', translation: ''},

    {face: 'ちゃ', back: 'cha', translation: ''},
    {face: 'ちゅ', back: 'chu', translation: ''},
    {face: 'ちょ', back: 'cho', translation: ''},

    {face: 'にゃ', back: 'nya', translation: ''},
    {face: 'にゅ', back: 'nyu', translation: ''},
    {face: 'にょ', back: 'nyo', translation: ''},

    {face: 'ひゃ', back: 'hya', translation: ''},
    {face: 'ひゅ', back: 'hyu', translation: ''},
    {face: 'ひょ', back: 'hyo', translation: ''},

    {face: 'みゃ', back: 'mya', translation: ''},
    {face: 'みゅ', back: 'myu', translation: ''},
    {face: 'みょ', back: 'myo', translation: ''},

    {face: 'りゃ', back: 'rya', translation: ''},
    {face: 'りゅ', back: 'ryu', translation: ''},
    {face: 'りょ', back: 'ryo', translation: ''},

    /* 拗音 (youon) with 濁点 (dakuten) and 半濁点 (handakuten) */
    {face: 'ぎゃ', back: 'gya', translation: ''},
    {face: 'ぎゅ', back: 'gyu', translation: ''},
    {face: 'ぎょ', back: 'gyo', translation: ''},

    {face: 'じゃ', back: 'ja', translation: ''},
    {face: 'じゅ', back: 'ju', translation: ''},
    {face: 'じょ', back: 'jo', translation: ''},

    {face: 'びゃ', back: 'bya', translation: ''},
    {face: 'びゅ', back: 'byu', translation: ''},
    {face: 'びょ', back: 'byo', translation: ''},

    {face: 'ぴゃ', back: 'pya', translation: ''},
    {face: 'ぴゅ', back: 'pyu', translation: ''},
    {face: 'ぴょ', back: 'pyo', translation: ''}
]