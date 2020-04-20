import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Index from '../views/Index.vue'
import MusicList from '../views/MusicList.vue'
import Music from '../views/Music.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Index',
        component: Index
      },
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
        path: '/music-list',
        name: 'musicList',
        component: MusicList
      },
      {
        path: '/music',
        name: 'music',
        component: Music
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
