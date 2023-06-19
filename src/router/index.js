import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/Articles/View.vue'
import ArticleCreate from '../views/Articles/Create.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticleView
    },
    
    {
      path: '/article/add',
      name: 'articlesAdd',
      component: ArticleCreate
    },
  ]
})

export default router
