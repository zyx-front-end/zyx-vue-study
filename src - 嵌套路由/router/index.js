import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'

import Find from '../views/Find.vue'
import My from '../views/My.vue'

import Ranking from '../views/second/Ranking.vue'
import Recommend from '../views/second/Recommend.vue'
import SongList from '../views/second/SongList.vue'

//在vue中 使用vue插件 都需要调用vue.use()
Vue.use(VueRouter)

//创建路由规则
const routes = [

  {
    path: '/find',
    name: "find",
    component: Find,
    children: [
      {
        path: 'ranking',
        component: Ranking,
      },
      {
        path: 'recommend',
        component: Recommend,
      },
      {
        path: 'songlist',
        component: SongList,
      }
    ]
  },
 
  
  
  {
    path: '/my',
    
    component: My
  }
]

//创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history'
})

//暴露路由对象
export default router
