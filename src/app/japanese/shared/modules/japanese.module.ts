import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import { FlashCardDecks } from '../models/flash-card-decks';
import iCard from '../models/iCard';

@Module({ namespaced: true })
export default class JapaneseModule extends VuexModule {
  private _card!: iCard;
  private _cardIndex!: number;
  private _deck!: iCard[];

  get card(): iCard { return this._card; }
  get cardIndex(): number { return this._cardIndex; }
  get deck(): iCard[] { return this._deck; }

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
