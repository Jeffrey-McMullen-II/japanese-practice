import { Options, Vue } from 'vue-class-component';

import Hiragana from './hiragana/hiragana.component.vue';

@Options({
    components: { Hiragana }
})
export default class App extends Vue {
}