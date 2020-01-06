import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
let router=new VueRouter({
  base:'/music/',
  routes:[{
    path:'/',
    name:'SongSheet',
    component:resolve=>require(['@/pages/songSheet'],resolve)
  },
  {
    path:'/playSong',
    name:'PlaySong',
    component:resolve=>require(['@/pages/playSong'],resolve)
  },
  {
    path:'/search',
    name:'Search',
    component:resolve=>require(['@/pages/search'],resolve)
  },
]
})
export default router