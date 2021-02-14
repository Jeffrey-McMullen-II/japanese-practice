import axios, { AxiosResponse } from 'axios';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import iFile from '../models/iFile';
import iPaginationResponse from '@/app/core/shared/models/iPaginationResponse';
import iPaginationRequest from '@/app/core/shared/models/iPaginationRequest';

@Module({ namespaced: true })
export default class GalleryModule extends VuexModule {
  private _files: iFile[] | null = null;
  private _totalRecords: number | null = 0;
  private _isLoading: boolean | null = true;

  get files() { return this._files; }
  get totalRecords() { return this._totalRecords; }
  get isLoading() { return this._isLoading; }

  @Action
  public async fetchImagePage(paginationRequest: iPaginationRequest) {
    await axios.post('http://retronova.x10host.com/api/public/files/page-request', paginationRequest)
    .then((response: AxiosResponse<iPaginationResponse>) => this.context.commit('onImagePageFetched', response.data))
    .catch((error) => console.log(error));
  }

  @Mutation
  public onImagePageFetched(response: iPaginationResponse) {
    this._files = response.results;
    this._totalRecords = response.totalRecords;
    this._isLoading = false;
  }

  @Mutation
  public setIsLoading(isLoading: boolean) {
    this._isLoading = isLoading;
  }
}