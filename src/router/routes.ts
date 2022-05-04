// import Index from '../view/Index/index'
const routes = [
    {
        path: '/',
        redirect: '/Login'
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('../view/Login/index.vue')
    },
    {
        path: '/Comprehensive',
        name: 'Comprehensive',
        component: () => import('../view/Comprehensive/index.vue')
    },
    {
        path: '/ErrorLog',
        name: 'ErrorLog',
        component: () => import('../view/ErrorLog/index.vue')
    }
]

export default routes