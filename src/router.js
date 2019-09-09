import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import car from "./components/Carousel.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index},
    {path: '/index',component: Index},
    {path: '/car',component: car},
    
  ]
})
