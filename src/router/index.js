import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
let router=new VueRouter({
  base:'/music/',
  routes:[{
    path:'/',
    name:'Home',
    component:resolve=>require(['@/pages/home'],resolve)
  }]
})
export default router