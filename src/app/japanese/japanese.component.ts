import { Options, Vue } from 'vue-class-component';
import { namespace } from 'vuex-class';

import iCard from './shared/models/iCard';
import iFile from '../core/shared/iFile';
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
  @JapaneseModule.Getter('deck') deck!: iCard[];
  @JapaneseModule.Getter('card') card!: iCard;
  @JapaneseModule.Getter('cardIndex') cardIndex!: number;
  @JapaneseModule.Getter('strokeImage') strokeImage!: iFile;
  @JapaneseModule.Getter('strokeImageLoading') strokeImageLoading!: boolean;
  @JapaneseModule.Getter('strokesVisible') strokesVisible!: boolean;

  readonly signaturePadRef = 'signaturePad';
  signaturePad!: iSignaturePadWrapper;

  options = {
    backgroundColor: "rgba(60, 145, 241, 0.699)",
    onEnd: this.onStroke.bind(this)
  }

  strokeCount = 0;
  displayFace = true;
  locked = false;
  translationVisible = false;

  get cardValue(): string | iKanji {
    return this.displayFace ? this.card?.face : this.card?.back;
  }

  get hasTranslation(): boolean {
    return !!this.card?.translation;
  }

  get cardTranslations(): string | undefined {
    return this.translationVisible ? this.card?.translation : '';
  }

  get cardLockClass(): string {
    return this.locked ? 'off-white' : 'white';
  }

  get lockIcon(): string {
    return this.locked ? 'pi pi-lock' : 'pi pi-unlock';
  }

  get translateClass(): string {
    return this.translationVisible ? '' : 'background-color: gray';
  }

  get strokes(): number | undefined {
    return this.card?.strokes;
  }

  get strokeImageSource(): string | ArrayBuffer | null {
    return this.strokeImage?.fileContents;
  }

  mounted() {
    this.changeDeck(this.$route.name as string);
    this.signaturePad = this.$refs[this.signaturePadRef] as iSignaturePadWrapper;
  }

  onRouteChanged(routeName: string) {
    this.initializeDisplay();
    this.changeDeck(routeName);
  }

  initializeDisplay() {
    this.clear();
    this.displayFace = !this.locked;
    this.translationVisible = false;
    this.setStrokesVisible(false);
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
  }

  onTranslateClicked() {
    this.translationVisible = !this.translationVisible;
  }

  onStrokeDisplayClicked() {
    this.setStrokesVisible(!this.strokesVisible);

    if (this.strokesVisible) {
      this.findStrokeImageByFileName(this.card?.face)
    }
  }

  onStroke() {
    this.strokeCount++;
  }

  undo() {
    this.signaturePad?.undoSignature();

    if (--this.strokeCount < 0) {
      this.strokeCount = 0;
    }
  }

  clear() {
    this.signaturePad?.clearSignature();
    this.strokeCount = 0;
  }

  randomIntFromInterval(minInclusive: number, maxInclusive: number): number {
    return Math.floor(Math.random() * (maxInclusive - minInclusive + 1) + minInclusive);
  }

  isKanji(cardValue: string | iKanji): boolean {
    return 'object' === typeof cardValue;
  }

  @JapaneseModule.Action('changeDeck') changeDeck!: (deckName: string) => void;
  @JapaneseModule.Action('findStrokeImageByFileName') findStrokeImageByFileName!: (fileName: string) => void;
  @JapaneseModule.Mutation('setCard') setCard!: (card: iCard) => void;
  @JapaneseModule.Mutation('setCardIndex') setCardIndex!: (index: number) => void;
  @JapaneseModule.Mutation('setStrokeImageLoading') setStrokeImageLoading!: (strokeImageLoading: boolean) => void;
  @JapaneseModule.Mutation('setStrokesVisible') setStrokesVisible!: (strokesVisible: boolean) => void;
}
