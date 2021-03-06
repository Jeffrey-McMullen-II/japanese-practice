import { Vue } from 'vue-class-component';

export default class AppHeader extends Vue {

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
        this.$router.push(route);
    }
}