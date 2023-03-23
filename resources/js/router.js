import './bootstrap';
import * as VueRouter from 'vue-router';
import MainComponent from './components/Main.vue';



export default new VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainComponent,
      props: true
    },
    {
      path: '/masters',
      component: () => import('./components/Masters.vue')
    }
  ]
})