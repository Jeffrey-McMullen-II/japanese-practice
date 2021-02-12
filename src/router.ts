import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Info from '../src/app/info/info.component.vue';
import Gallery from '../src/app/gallery/gallery.component.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  }
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});