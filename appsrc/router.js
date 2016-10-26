import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import { User, UserEdit } from './components'

Vue.use(VueRouter)
const router = new VueRouter()

router.map({
  '/': {
    name: 'home',
    component: User
  },
  '/user': {
    name: 'user',
    component: User
  },
  '/user/edit/:id': {
    name: 'userEdit',
    component: UserEdit
  }
})
export default router;
