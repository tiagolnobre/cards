import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../app.vue';
import { routes } from './router.js';

import "../../assets/stylesheets/application.css"

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('application'))
  const app = new Vue({
    el,
    router: router,
    // store: store,
    render: h => h(App)
  }) //.$mount('app')
})
