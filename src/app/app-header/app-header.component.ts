import { Vue } from 'vue-class-component';
import { namespace } from 'vuex-class';

const JapaneseModule = namespace('JapaneseModule');

export default class AppHeader extends Vue {
    
    @JapaneseModule.Action('onJapaneseRouteSelected') onJapaneseRouteSelected!: (routeName: any) => void;

    hiraganaToggle = false;

    setHiraganaToggle(value: boolean) {
        this.hiraganaToggle = value;
    }

    getHiraganaContent() {
        return this.hiraganaToggle ? 'dropdown-content show' : 'dropdown-content';
    }

    getHiraganaArrow() {
        return this.hiraganaToggle ? 'pi pi-chevron-down' : 'pi pi-chevron-right';
    }

    onRouteClicked(route: string) {
        this.onJapaneseRouteSelected(route);
        this.$router.push(route);
    }
}