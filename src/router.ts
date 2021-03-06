import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Hiragana from '../src/app/hiragana/hiragana.component.vue';
import Welcome from '../src/app/welcome/welcome.component.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/hiragana',
    name: 'hiragana',
    component: Hiragana
  }
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});