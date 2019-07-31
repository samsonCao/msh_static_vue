import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('../pages/index');
const Main = () => import('../pages/main');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/home',
      component: Main,
      children: [
        {
          path: '',
          redirect: 'index'
        }
      ]
    }
  ]
})
