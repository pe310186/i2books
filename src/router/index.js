import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage.vue'
import Join from '@/components/Join.vue'
import Agreement from '@/components/Agreement.vue'
import Confirm from '@/components/Confirm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Startpage',
      component: StartPage
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join
    },
    {
      path: '/Agreement',
      name: 'Agreement',
      component: Agreement
    },
    {
      path: '/Confirm',
      name: 'Confirm',
      component: Confirm
    }
  ]
})
