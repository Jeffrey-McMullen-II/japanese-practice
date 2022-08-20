import axios, { AxiosResponse } from 'axios';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import iCard from '../models/iCard';
import iFile from '@/app/core/shared/iFile';
import { API_URL } from '@/api-url';
import { FlashCardDecks } from '../models/flash-card-decks';

@Module({ namespaced: true })
export default class JapaneseModule extends VuexModule {
  private _card!: iCard;
  private _cardIndex!: number;
  private _deck!: iCard[];
  private _strokeImage!: iFile;
  private _strokeImageLoading!: boolean;
  private _strokesVisible!: boolean;

  get card(): iCard { return this._card; }
  get cardIndex(): number { return this._cardIndex; }
  get deck(): iCard[] { return this._deck; }
  get strokeImage(): iFile { return this._strokeImage; }
  get strokeImageLoading(): boolean { return this._strokeImageLoading; }
  get strokesVisible(): boolean { return this._strokesVisible; }

  @Action async findStrokeImageByFileName(name: string) {
    this.context.commit('setStrokeImageLoading', true);

    await axios.get(API_URL + `/files?fileName=${name}`)
    .then((response: AxiosResponse<iFile>) => {
      this.context.commit('setStrokeImage', response.data);
      this.context.commit('setStrokeImageLoading', false);
    })
    .catch((error) => {
      console.log(error);
      this.context.commit('setStrokeImageLoading', false);
    });
  }

  @Action changeDeck(deckName: string) {
    const deck = FlashCardDecks.get(deckName) as iCard[];

    if (deck && deck.length) {
      this.context.commit('setDeck', deck);
      this.context.commit('setStrokesVisible', false);
    }
  }

  @Mutation setDeck(deck: iCard[]) {
    this._deck = deck;
    this._card = deck[0];
    this._cardIndex = 0;
  }

  @Mutation setCard(card: iCard) {
    this._card = card;
  }

  @Mutation setCardIndex(cardIndex: number) {
    this._cardIndex = cardIndex;
  }

  @Mutation setStrokeImage(strokeImage: iFile) {
    this._strokeImage = strokeImage;
  }

  @Mutation setStrokeImageLoading(strokeImageLoading: boolean) {
    this._strokeImageLoading = strokeImageLoading;
  }

  @Mutation setStrokesVisible(strokesVisible: boolean) {
    this._strokesVisible = strokesVisible;
  }
}
