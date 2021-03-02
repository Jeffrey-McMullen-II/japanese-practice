import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Hiragana from '../src/app/hiragana/hiragana.component.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Hiragana',
    component: Hiragana
  }
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});