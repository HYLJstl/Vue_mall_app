import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:'',
    redirect: '/home'
  },
  {
    path:'/home',
    component:() => import('../views/home/Home')
  },
  {
    path:'/category',
    component:() => import('../views/category/Category')
  },
  {
    path:'/cart',
    component:() => import('../views/cart/Cart')
  },
  {
    path:'/profile',
    component:() => import('../views/profile/Profile')
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})

export default router
