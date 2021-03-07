import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import { FlashCardGroups } from '../models/flash-card-groups';
import iCard from '../models/iCard';

@Module({ namespaced: true })
export default class JapaneseModule extends VuexModule {
  private _content: iCard[] | null = null;
  private _card: iCard | null = null;
  private _cardIndex: number | null = null;

  get content() { return this._content; }
  get card() { return this._card; }
  get cardIndex() { return this._cardIndex; }

  @Action onJapaneseContentSelected(contentName: string) {
    const content = FlashCardGroups.get(contentName) as iCard[];

    if (content && content.length) {
      this.context.commit('setJapaneseContent', content);
    }
  }

  @Mutation setJapaneseContent(content: iCard[]) {
    this._content = content;
    this._card = content[0];
    this._cardIndex = 0;
  }

  @Mutation setCard(card: iCard) {
    this._card = card;
  }

  @Mutation setCardIndex(cardIndex: number) {
    this._cardIndex = cardIndex;
  }
}