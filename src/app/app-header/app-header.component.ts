import { Vue } from 'vue-class-component';
import { namespace } from 'vuex-class';

const JapaneseModule = namespace('JapaneseModule');

export default class AppHeader extends Vue {
    
    @JapaneseModule.Action('changeDeck') changeDeck!: (deckName: any) => void; // eslint-disable-line

    hiraganaToggle = false;
    katakanaToggle = false;
    kanjiToggle = false;

    getHiraganaContent() {
        return this.hiraganaToggle ? 'dropdown-content show' : 'dropdown-content';
    }

    getKatakanaContent() {
        return this.katakanaToggle ? 'dropdown-content show' : 'dropdown-content';
    }

    getKanjiContent() {
        return this.kanjiToggle ? 'dropdown-content show' : 'dropdown-content';
    }

    getHiraganaArrow() {
        return this.hiraganaToggle ? 'pi pi-chevron-down' : 'pi pi-chevron-right';
    }

    getKatakanaArrow() {
        return this.katakanaToggle ? 'pi pi-chevron-down' : 'pi pi-chevron-right';
    }

    getKanjiArrow() {
        return this.kanjiToggle ? 'pi pi-chevron-down' : 'pi pi-chevron-right';
    }

    setHiraganaToggle(value: boolean) {
        this.hiraganaToggle = value;
    }

    setKatakanaToggle(value: boolean) {
        this.katakanaToggle = value;
    }

    setKanjiToggle(value: boolean) {
        this.kanjiToggle = value;
    }

    onDeckClicked(route: string) {
        this.changeDeck(route);
        this.$router.push(route);
    }
}