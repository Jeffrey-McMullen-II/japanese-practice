import { Vue } from 'vue-class-component';

export default class Info extends Vue {
    
    mounted() {
        this.$router.push('hiragana-characters');
    }
}