import axios, { AxiosResponse } from 'axios';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import iFile from '../models/iFile';
import iPaginationRequest from '@/app/core/shared/models/iPaginationRequest';
import iPaginationResponse from '@/app/core/shared/models/iPaginationResponse';

@Module({ namespaced: true })
export default class GalleryModule extends VuexModule {
  private files!: iFile[] | null;
  private totalRecords: number | null = 0;
  private isLoading: boolean | null = true;

  get getFiles() {
    return this.files;
  }

  get getTotalRecords() {
    return this.totalRecords;
  }

  get getIsLoading() {
    return this.isLoading;
  }

  @Action
  public async fetchImagePage(paginationRequest: iPaginationRequest) {
    await axios.post('http://retronova.x10host.com/ng-crud-app-back-end-php/public/api/files/page-request', paginationRequest)
    .then((response: AxiosResponse<iPaginationResponse>) => this.context.commit('onImagePageLoaded', response.data))
    .catch((error) => console.log(error));
  }

  @Mutation
  public onImagePageLoaded(response: iPaginationResponse) {
    this.files = response.results;
    this.totalRecords = response.totalRecords;
    this.isLoading = false;
  }

  @Mutation
  public setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}