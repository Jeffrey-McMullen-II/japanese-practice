import { Options, Vue } from 'vue-class-component';

import Gallery from './gallery/gallery.component.vue';

@Options({
    components: { Gallery }
})
export default class App extends Vue {
}