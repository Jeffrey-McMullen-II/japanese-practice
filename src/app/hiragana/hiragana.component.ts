import { Options, Vue } from 'vue-class-component';

import iCard from '../core/signature-pad-wrapper/shared/models/card/iCard';
import iSignaturePadWrapper from '../core/signature-pad-wrapper/iSignaturePadWrapper';
import SignaturePadWrapper from '../core/signature-pad-wrapper/signature-pad-wrapper.component.vue';
import { HiraganaCharacters } from '../core/signature-pad-wrapper/shared/models/hiragana-characters/hiragana-characters';

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

  previous() {
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

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
