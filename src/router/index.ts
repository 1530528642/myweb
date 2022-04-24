import {createRouter, createWebHistory} from 'vue-router'  //引入vue-router
import routes from './routes'
const router = createRouter({
    history: createWebHistory(),  
    routes
})

// 给路由设置守卫函数
router.beforeEach((to, form, next) => {
    const isToken = localStorage.getItem('token')
    if(to.path !== '/Login' && isToken === null) {
      next('/Login')
    } else {
      next()
    }
  })
  
export default router