import { createStore } from 'vuex';

import JapaneseModule from './app/japanese/shared/modules/japanese.module';

export default createStore({
  modules: {
    JapaneseModule
  }
});
