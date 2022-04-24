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
        path: '/Index',
        name: 'Index',
        component: () => import('../view/Index/index.vue')
    }
]

export default routes