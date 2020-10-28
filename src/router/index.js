import Vue from 'vue'
import VueRouter from 'vue-router'
import BookManage from '../views/BookManage'
import AddBook from '../views/AddBook'
import Index from '../views/Index'
import BookUpdate from '../views/BookUpdate'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"职位管理",
    component:Index,
    show:true,
    redirect:"/BookManage",
    children:[
      {
        path:"/BookManage",
        name:"职位查询",
        component:BookManage
      },
      {
        path:"/AddBook",
        name:"新增职位",
        component:AddBook
      }
    ]
  },
  {
    path:'/update',
    component:BookUpdate,
    show:false
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
