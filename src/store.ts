import { createStore } from 'vuex';
import GalleryModule from '../src/app/gallery/shared/modules/gallery.module';

export default createStore({
  modules: {
    GalleryModule
  }
});