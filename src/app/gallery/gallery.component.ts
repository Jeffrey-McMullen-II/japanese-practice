import { Vue } from 'vue-class-component';
import { namespace } from 'vuex-class';
import { PageState } from 'primevue/paginator';

import iFile from './shared/models/iFile';
import iPaginationRequest from '@/app/core/shared/models/iPaginationRequest';

const GalleryModule = namespace('GalleryModule');

export default class About extends Vue {

  @GalleryModule.Getter('getFiles') getFiles!: iFile[] | null;
  @GalleryModule.Getter('getTotalRecords') getTotalRecords!: number | null;
  @GalleryModule.Getter('getIsLoading') getIsLoading!: boolean | null;
  @GalleryModule.Action('fetchImagePage') fetchImagePage!: (paginationRequest: iPaginationRequest) => void;
  @GalleryModule.Mutation('setIsLoading') setIsLoading!: (isLoading: boolean) => void

  first: number | null = 0;
  rows: number | null = 1;
  timeout: number | undefined;

  mounted() {
    const paginationRequest: iPaginationRequest = {
      first: this.first,
      rows: this.rows
    }

    this.fetchImagePage(paginationRequest);
  }

  onPaged(event: PageState) {
    this.setIsLoading(true);

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      const paginationRequest: iPaginationRequest = {
        first: event.first,
        rows: this.rows
      }
      
      this.fetchImagePage(paginationRequest);
    }, 1000);
  }
}