import { Vue } from 'vue-class-component';

export default class Welcome extends Vue {

    mounted() {
        console.log(this.$route);
    }
}