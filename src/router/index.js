import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import FirebaseAuth from '@/components/FirebaseAuth'
import Signup2 from '@/components/SignupValidate'
import Bookmarker from '@/components/Bookmarker.vue'
import Detail from '@/components/Detail'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/bookmarker',
          name: 'Bookmarker',
          component: Bookmarker
        },
        {
          path: '/detail',
          name: 'Detail',
          component: Detail
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/hello/*',
          redirect: {
            name: 'Bookmarker'
          }
        }
      ]
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup2',
      name: 'Signup2',
      component: Signup2
    },
    {
      path: '*', 
      redirect: { name: 'Login'}
    },
    {
      path: '/firebaseauth',
      name: 'Auth',
      component: FirebaseAuth
    }
  ],
  mode: 'history',
})



