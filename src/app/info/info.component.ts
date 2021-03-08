import { Vue } from 'vue-class-component';

export default class Info extends Vue {
    
    mounted() {
        this.$router.replace('hiragana-characters');
    }
}