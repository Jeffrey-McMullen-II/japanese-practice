import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Japanese from './app/japanese/japanese.component.vue';
import Info from './app/info/info.component.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'info', component: Info },
  { path: '/hiragana-alphabet', name: 'hiragana-alphabet', component: Japanese },
  { path: '/hiragana-words', name: 'hiragana-words', component: Japanese }
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});