import { createRouter, createWebHistory } from 'vue-router';

import Info from './app/info/info.component.vue';
import Japanese from './app/japanese/japanese.component.vue';

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', name: 'info', component: Info },
    { path: '/hiragana-characters', name: 'hiragana-characters', component: Japanese },
    { path: '/hiragana-vocabulary', name: 'hiragana-vocabulary', component: Japanese },
    { path: '/katakana-characters', name: 'katakana-characters', component: Japanese },
    { path: '/katakana-vocabulary', name: 'katakana-vocabulary', component: Japanese }
  ]
});