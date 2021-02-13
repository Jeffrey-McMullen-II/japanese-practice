import { PageState } from 'primevue/paginator';
import { Vue } from 'vue-class-component';
import { namespace } from 'vuex-class';

import iFile from './shared/models/iFile';
import iPaginationRequest from '@/app/core/shared/models/iPaginationRequest';

const GalleryModule = namespace('GalleryModule');

export default class Gallery extends Vue {
  first: number | null = 0;
  rows: number | null = 1;
  timeout: number | undefined;

  @GalleryModule.Getter('files') files!: iFile[] | null;
  @GalleryModule.Getter('totalRecords') totalRecords!: number | null;
  @GalleryModule.Getter('isLoading') isLoading!: boolean | null;
  @GalleryModule.Action('fetchImagePage') fetchImagePage!: (paginationRequest: iPaginationRequest) => void;
  @GalleryModule.Mutation('setIsLoading') setIsLoading!: (isLoading: boolean) => void;

  mounted() {
    this.getImagePage();
  }

  onPaged(event: PageState) {
    this.setIsLoading(true);

    clearTimeout(this.timeout);

    this.timeout = setTimeout(this.getImagePage, 1000);
  }

  private getImagePage(event?: PageState) {
    const paginationRequest: iPaginationRequest = {
      first: event ? event.first : this.first,
      rows: this.rows
    }
    
    this.fetchImagePage(paginationRequest);
  }
}