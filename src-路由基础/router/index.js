import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'
import Part from '../views/Part.vue'
import NotFound from '../views/NotFound.vue'
import Detail from '../views/Detail.vue'
import MyDetail from '../views/MyDetail.vue'
//在vue中 使用vue插件 都需要调用vue.use()
Vue.use(VueRouter)

//创建路由规则
const routes = [
  {
    path: '/home',
    name:"home",
    component: Home
  },
  {
    path: '/find',
    name:"find",
    component: Find
  },
  {
    path: '/part',
    name:"part",
    component: Part
  },
  //重定向
  // {
  //   path:'*',
  //   redirect:'/'
  // }
  {
    path:'*',
    component:NotFound
  },
  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/mydetail/:users',
    name:"mydetail",
    component:MyDetail
  }
]

//创建路由对象
const router = new VueRouter({
  routes,
  mode:'history'
})

//暴露路由对象
export default router
