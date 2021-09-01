import { Options, Vue } from 'vue-class-component';
import { namespace } from 'vuex-class';

import iCard from './shared/models/iCard';
import iKanji from './shared/models/iKanji';
import iSignaturePadWrapper from '../core/signature-pad-wrapper/iSignaturePadWrapper';
import SignaturePadWrapper from '../core/signature-pad-wrapper/signature-pad-wrapper.component.vue';

const JapaneseModule = namespace('JapaneseModule');

@Options({
  components: { SignaturePadWrapper },
  props: { routeName: { type: String } },
  watch: { routeName: function (routeName: string) { this.onRouteChanged(routeName); } }
})
export default class Japanese extends Vue {
  @JapaneseModule.Getter('deck') deck!: any | null; // eslint-disable-line
  @JapaneseModule.Getter('card') card!: iCard | null;
  @JapaneseModule.Getter('cardIndex') cardIndex!: number | null;
  @JapaneseModule.Action('changeDeck') changeDeck!: (deckName: any) => void; // eslint-disable-line
  @JapaneseModule.Mutation('setCard') setCard!: (card: iCard) => void;
  @JapaneseModule.Mutation('setCardIndex') setCardIndex!: (index: number) => void;

  readonly signaturePadRef = 'signaturePad';
  signaturePad: iSignaturePadWrapper | null = null;

  options = { backgroundColor: "rgba(60, 145, 241, 0.699)" }

  displayFace = true;
  translationVisible = false;

  lockLabel = 'Lock';
  locked = false;

  get cardValue() {
    return this.displayFace ? this.card?.face : this.card?.back;
  }

  get hasTranslation() {
    return !!this.card?.translation;
  }

  get cardTranslations() {
    return this.translationVisible ? this.card?.translation : '';
  }

  get translateButtonName() {
    return this.translationVisible ? 'Hide' : 'Translate';
  }

  get cardLockStyle() {
    return this.locked ? 'off-white' : 'white';
  }

  get lockClass() {
    return this.hasTranslation ? 'display-inline lateral-padding' : 'display-inline left-padding';
  }

  mounted() {
    this.changeDeck(this.$route.name);
    this.signaturePad = this.$refs[this.signaturePadRef] as iSignaturePadWrapper;
  }

  onRouteChanged(routeName: string) {
    this.initializeDisplay();
    this.changeDeck(routeName);
  }

  initializeDisplay() {
    if (!this.locked) { this.displayFace = true; }
    this.clear();
    this.translationVisible = false;
  }

  previous() {
    this.initializeDisplay();

    if (this.cardIndex !== null && this.cardIndex > 0) {
      this.setCardIndex(this.cardIndex - 1);
      return this.setCard(this.deck[this.cardIndex]);
    }

    if (this.cardIndex === 0) {
      this.setCardIndex(this.deck.length - 1);
      return this.setCard(this.deck[this.cardIndex]);
    }
  }

  randomize() {
    this.initializeDisplay();

    let newCardFound = false;

    while (!newCardFound) {
      const cardIndex = this.randomIntFromInterval(0, this.deck.length - 1);
      const card = this.deck[cardIndex] as iCard;

      if (card.face !== this.card?.face) {
        this.setCard(card);
        this.setCardIndex(cardIndex);
        newCardFound = true;
      }
    }
  }

  next() {
    this.initializeDisplay();

    if (this.cardIndex !== null && this.cardIndex < this.deck.length - 1) {
      this.setCardIndex(this.cardIndex + 1);
      return this.setCard(this.deck[this.cardIndex]);
    }

    if (this.cardIndex === this.deck.length - 1) {
      this.setCardIndex(0);
      return this.setCard(this.deck[this.cardIndex]);
    }
  }

  flip() {
    this.displayFace = !this.displayFace;
  }

  onLockClicked() {
    this.locked = !this.locked;
    this.lockLabel = this.locked ? 'Unlock' : 'Lock';
  }

  onTranslateClicked() {
    this.translationVisible = !this.translationVisible;
  }

  undo() {
    if (this.signaturePad) {
      this.signaturePad.undoSignature();
    }
  }

  clear() {
    if (this.signaturePad) {
      this.signaturePad.clearSignature();
    }
  }

  randomIntFromInterval(minInclusive: number, maxInclusive: number): number {
    return Math.floor(Math.random() * (maxInclusive - minInclusive + 1) + minInclusive);
  }

  isKanji(cardValue: string | iKanji): boolean {
    return 'object' === typeof cardValue;
  }
}