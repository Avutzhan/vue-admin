import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import News from '@/components/News/Index'
import NewsCreate from '@/components/News/Create'
import NewsEdit from '@/components/News/Edit'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },
    {
      path: '/news-create',
      name: 'news-create',
      component: NewsCreate,
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },
    {
      path: '/news-update/:id',
      name: 'news-update',
      component: NewsEdit,
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('jwt') == null){
      next()
    }
  }else {
    next()
  }
})

export default router



