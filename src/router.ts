import { createRouter, createWebHistory } from 'vue-router';

import Japanese from './app/japanese/japanese.component.vue';
import Info from './app/info/info.component.vue';

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', name: 'info', component: Info },
    { path: '/hiragana-characters', name: 'hiragana-characters', component: Japanese },
    { path: '/hiragana-words', name: 'hiragana-words', component: Japanese },
    { path: '/katakana-characters', name: 'katakana-characters', component: Japanese },
    { path: '/katakana-words', name: 'katakana-words', component: Japanese }
  ]
});