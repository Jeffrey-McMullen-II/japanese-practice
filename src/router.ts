import { createRouter, createWebHistory } from 'vue-router';

import Info from './app/info/info.component.vue';
import Japanese from './app/japanese/japanese.component.vue';

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', name: 'info', component: Info },
    { path: '/hiragana-characters', name: 'hiragana-characters', component: Japanese, props: route => ({ routeName: route.name }) },
    { path: '/hiragana-vocabulary', name: 'hiragana-vocabulary', component: Japanese, props: route => ({ routeName: route.name }) },
    { path: '/katakana-characters', name: 'katakana-characters', component: Japanese, props: route => ({ routeName: route.name }) },
    { path: '/katakana-vocabulary', name: 'katakana-vocabulary', component: Japanese, props: route => ({ routeName: route.name }) },
    { path: '/kanji-radicals-n5', name: 'kanji-radicals-n5', component: Japanese, props: route => ({ routeName: route.name }) },
    { path: '/kanji-vocabulary-n5', name: 'kanji-vocabulary-n5', component: Japanese, props: route => ({ routeName: route.name }) }
  ]
});