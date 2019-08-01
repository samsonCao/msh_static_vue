import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('pages/index');
const Message = () => import('pages/message');
const Page404 = () => import('pages/ErrorPage/404');
const Page500 = () => import('pages/ErrorPage/500');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/404',
      component: Page404
    },
    {
      path: '/500',
      component: Page500
    },
  ]
})
