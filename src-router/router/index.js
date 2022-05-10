import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'
import Part from '../views/Part.vue'
import NotFound from '../views/NotFound.vue'

//在vue中 使用vue插件 都需要调用vue.use()
Vue.use(VueRouter)

//创建路由规则
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/find',
    component: Find
  },
  {
    path: '/part',
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
  }
]

//创建路由对象
const router = new VueRouter({
  routes
})

//暴露路由对象
export default router
