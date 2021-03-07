import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Japanese from './app/japanese/japanese.component.vue';
import Welcome from './app/welcome/welcome.component.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'welcome', component: Welcome },
  { path: '/hiragana-alphabet', name: 'hiragana-alphabet', component: Japanese },
  { path: '/hiragana-words', name: 'hiragana-words', component: Japanese }
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});