import { Options, Vue } from 'vue-class-component';

import { HiraganaCharacters } from '../core/signature-pad-wrapper/shared/models/hiragana-characters/hiragana-characters';
import iCard from '../core/signature-pad-wrapper/shared/models/card/iCard';
import iSignaturePadWrapper from '../core/signature-pad-wrapper/iSignaturePadWrapper';
import SignaturePadWrapper from '../core/signature-pad-wrapper/signature-pad-wrapper.component.vue';

@Options({
  components: { SignaturePadWrapper }
})
export default class Hiragana extends Vue {
  readonly ref = 'hiraganaSignaturePad';

  options = { backgroundColor: "rgba(60, 145, 241, 0.699)" }

  card = HiraganaCharacters[0] as iCard;
  cardIndex = 0;

  displayFace = true;
  translationVisible = false;

  lockLabel = 'Lock';
  locked = false;

  get cardValue() {
    return this.displayFace ? this.card.face : this.card.back;
  }

  get hasTranslation() {
    return !!this.card?.translation;
  }

  get cardTranslation() {
    return this.translationVisible ? this.card.translation : '';
  }

  get translateButtonName() {
    return this.translationVisible ? 'Hide' : 'Translate';
  }

  get lockStyle() {
    return this.locked ? 'off-white' : 'white';
  }

  mounted() {
    console.log(this.$route);
  }

  previous() {
    if (!this.locked) { this.displayFace = true; }
    this.clear();
    this.translationVisible = false;

    if (this.cardIndex > 0) {
      this.cardIndex--;
      return this.card = HiraganaCharacters[this.cardIndex];
    }

    if (this.cardIndex === 0) {
      this.cardIndex = HiraganaCharacters.length - 1;
      return this.card = HiraganaCharacters[this.cardIndex];
    }
  }

  randomize() {
    if (!this.locked) { this.displayFace = true; }
    this.clear();
    this.translationVisible = false;
    let newCardFound = false;

    while (!newCardFound) {
      const cardIndex = this.randomIntFromInterval(0, HiraganaCharacters.length - 1);
      const card = HiraganaCharacters[cardIndex] as iCard;

      if (card.face !== this.card.face) {
        this.card = card;
        this.cardIndex = cardIndex;
        newCardFound = true;
      }
    }
  }

  next() {
    if (!this.locked) { this.displayFace = true; }
    this.clear();
    this.translationVisible = false;

    if (this.cardIndex < HiraganaCharacters.length - 1) {
      this.cardIndex++;
      return this.card = HiraganaCharacters[this.cardIndex];
    }

    if (this.cardIndex === HiraganaCharacters.length - 1) {
      this.cardIndex = 0;
      return this.card = HiraganaCharacters[this.cardIndex];
    }
  }

  flip() {
    this.displayFace = !this.displayFace;
  }

  lockClicked() {
    this.locked = !this.locked;
    this.lockLabel = this.locked ? 'Unlock' : 'Lock';
  }

  onTranslateClicked() {
    this.translationVisible = !this.translationVisible;
  }

  undo() {
    const hiraganaPad = this.$refs[this.ref] as iSignaturePadWrapper;
    hiraganaPad.undoSignature();
  }

  save() {
    const hiraganaPad = this.$refs[this.ref] as iSignaturePadWrapper;
    const { isEmpty, data } = hiraganaPad.saveSignature();

    alert("Open DevTools to see the save data.");
    console.log(isEmpty);
    console.log(data);
  }

  clear() {
    const hiraganaPad = this.$refs[this.ref] as iSignaturePadWrapper;
    hiraganaPad.clearSignature();
  }

  randomIntFromInterval(minInclusive: number, maxInclusive: number): number {
    return Math.floor(Math.random() * (maxInclusive - minInclusive + 1) + minInclusive);
  }
}
