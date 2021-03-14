import { Vue } from 'vue-class-component';
import { namespace } from 'vuex-class';

const JapaneseModule = namespace('JapaneseModule');

export default class AppHeader extends Vue {
    
    @JapaneseModule.Action('onJapaneseContentSelected') onJapaneseContentSelected!: (contentName: any) => void; // eslint-disable-line

    hiraganaToggle = false;
    katakanaToggle = false;

    getHiraganaContent() {
        return this.hiraganaToggle ? 'dropdown-content show' : 'dropdown-content';
    }

    getKatakanaContent() {
        return this.katakanaToggle ? 'dropdown-content show' : 'dropdown-content';
    }

    getHiraganaArrow() {
        return this.hiraganaToggle ? 'pi pi-chevron-down' : 'pi pi-chevron-right';
    }

    getKatakanaArrow() {
        return this.katakanaToggle ? 'pi pi-chevron-down' : 'pi pi-chevron-right';
    }

    setHiraganaToggle(value: boolean) {
        this.hiraganaToggle = value;
    }

    setKatakanaToggle(value: boolean) {
        this.katakanaToggle = value;
    }

    onRouteClicked(route: string) {
        this.onJapaneseContentSelected(route);
        this.$router.push(route);
    }
}