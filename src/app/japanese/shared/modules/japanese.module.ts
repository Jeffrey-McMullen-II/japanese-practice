import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import { FlashCardDecks } from '../models/flash-card-decks';
import iCard from '../models/iCard';

@Module({ namespaced: true })
export default class JapaneseModule extends VuexModule {
  private _deck: iCard[] | null = null;
  private _card: iCard | null = null;
  private _cardIndex: number | null = null;

  get deck() { return this._deck; }
  get card() { return this._card; }
  get cardIndex() { return this._cardIndex; }

  @Action changeDeck(deckName: string) {
    const deck = FlashCardDecks.get(deckName) as iCard[];

    if (deck && deck.length) {
      this.context.commit('setDeck', deck);
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
}