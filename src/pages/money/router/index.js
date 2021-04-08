import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduce from '@/pages/money/views/Introduce.vue'
import Program from '@/pages/money/views/Program.vue'
import Speaker from '@/pages/money/views/Speaker.vue'
import Apply from '@/pages/money/views/Apply.vue'
import Replay from '@/pages/money/views/Replay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/money/Introduce',
    name: 'Introduce',
    component: Introduce
  },
  {
    path: '/money/Speaker',
    name: 'Speaker',
    component: Speaker
  },
  {
    path: '/money/Program',
    name: 'Program',
    component: Program
  },
  {
    path: '/money/Apply',
    name: 'Apply',
    component: Apply
  },
  {
    path: '/money/Replay',
    name: 'Replay',
    component: Replay
  },
  {
    path: '/money',
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
