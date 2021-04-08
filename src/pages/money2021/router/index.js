import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduce from '@/pages/money2021/views/Introduce.vue'
import Program from '@/pages/money2021/views/Program.vue'
import Speaker from '@/pages/money2021/views/Speaker.vue'
import Apply from '@/pages/money2021/views/Apply.vue'
import Replay from '@/pages/money2021/views/Replay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/money2021/Introduce',
    name: 'Introduce',
    component: Introduce
  },
  {
    path: '/money2021/Speaker',
    name: 'Speaker',
    component: Speaker
  },
  {
    path: '/money2021/Program',
    name: 'Program',
    component: Program
  },
  {
    path: '/money2021/Apply',
    name: 'Apply',
    component: Apply
  },
  {
    path: '/money2021/Replay',
    name: 'Replay',
    component: Replay
  },
  {
    path: '/money2021',
    name: 'Introduce',
    component: Introduce
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
