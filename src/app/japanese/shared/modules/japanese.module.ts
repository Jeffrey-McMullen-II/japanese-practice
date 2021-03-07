import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import { HiraganaCharacters } from '../models/hiragana/hiragana-characters';
import { HiraganaWords } from '../models/hiragana/hiragana-words';
import iCard from '../models/card/iCard';

@Module({ namespaced: true })
export default class JapaneseModule extends VuexModule {
  private _content: any | null = null;
  private _card: iCard | null = null;
  private _cardIndex: number | null = null;

  get content() { return this._content; }
  get card() { return this._card; }
  get cardIndex() { return this._cardIndex; }

  @Action
  public onJapaneseRouteSelected(routeName: string) {
    if (routeName === 'hiragana-alphabet') { this.context.commit('setJapaneseContent', HiraganaCharacters); }
    if (routeName === 'hiragana-words') { this.context.commit('setJapaneseContent', HiraganaWords); }
  }

  @Mutation
  public setJapaneseContent(content: any) {
    this._content = content;
    this._card = content[0];
    this._cardIndex = 0;
  }

  @Mutation
  public setCard(card: iCard) {
    this._card = card;
  }

  @Mutation
  public setCardIndex(cardIndex: number) {
    this._cardIndex = cardIndex;
  }
}