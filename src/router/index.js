import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestRepo from '@/components/LatestRepo'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
        path: '/',
        name: 'LatestRepo',
        component: LatestRepo
    }
]
})