import { Options, Vue } from 'vue-class-component';
import AppHeader from './app-header/app-header.component.vue';

@Options({
    components: { AppHeader }
})
export default class App extends Vue {}
