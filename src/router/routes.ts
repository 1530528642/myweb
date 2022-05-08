// 1 当一级路由path存在多个以'/'默认路径时 vue会以第一个路由为准加载 加载到App.vue router-view位置 
//   以当前第一个路由为例 当打开没有路径或者只有域名默认进入Comprehensive组件 而后面的path为'/'不会加载
// 2 redirect 当进入到一个页面后希望跳转到别的页面时使用 存在几种情况 (希望地址栏显示一级redirect：'跳转路径'（如果存在父级路由地址栏只会显示跳转页面路由path地址不会显示父级path地址）， 显示多级redirect：{name: '跳转路由name'}该name必须是最终跳转页面路由name，如果存在父级路由这种跳转会把父路由path和子路由拼接显示在一起地址栏中)
//   a：页面平级重定向: 直接跳转新页面 当前页面消失 
//   b：跳转页为当前页子页面切当前页有router-view承载时则当前页面和子页面同时存在
//   c：redirect跳转值为path时（当为路径时可直接讲路径后redirect: 路径， 后面如果name跳转使用redirect:{name：重定向页面name名称}）如果该跳转页面为一级路径名是没有影响 如果存在多级则只会在地址栏显示最后一级路径名称 如果要重定向多级可以{name：重定向页面name名称}方式跳转 （一级:/路径 多级:/路径/路径...）
// 3 如果一个页面跳转路由时需要和被跳转页共存时则将被跳转页放到当前页面路由chiildren下面且子路由path尽量不带'/' 当前页加上router-view标签
// 4 如果页面下有许多子页面 但是希望子页面跳转路径父页面名称不一样可以将父页面path和nane写成自己想要的名称但是component必须是父页面名称（其实都是在父页面显示只不过把父页面名称重写了，在地址栏看才更友好） 要是父页面完全一样则直接写成父页面名称
// 5 为什么没有将菜单栏卸载app.vue中 因为app.vue为主入口页面一旦写死在里面其他页面跳转会和当前内容同时显示，而菜单栏主要是显示在主题内容页面的（因为app.vue主要用途是显示单个页面比如登录页， 报错页，主内容页，除非所有页面都会存在的内容可以写在app.vue）
import Comprehensive from '../view/Comprehensive/index.vue'
const routes = [
    {
        path: '/',
        name: 'Comprehensive',
        component: Comprehensive,
        redirect: '/dataUpload'  // 当前默认进入页面为Comprehensive Comprehensive存在多个子页面 因为首次进入用户不可能点击所以需要自动跳转子页面使用redirect 不使用的话只会有当前默认页面子页面不会自动跳转显示 其他子页面都是用户点击跳转
    },
    {
        path: '/',
        name: 'workbench',
        component: Comprehensive,
        children: [
            {
                path: 'dataUpload',
                name: 'dataUpload',
                component: () => import('../view/dataUpload/index.vue')
            }
        ]
    },
    {
        path: '/',  // 因为第一个路由path也为'/' 所以当前这个path写成'/' 不会被当成进入时的默认页 如果希望地址栏显示的是多级地址 可以写成./路径名或者./路径/路径...
        name: 'dataMarket',
        component: Comprehensive,
        children: [
            {
                path: 'lineStatistics',
                name: 'lineStatistics',
                component: () => import('../view/lineStatistics/index.vue')
            }
        ]
    },
    {
        path: '/serviceCentre',
        name: 'serviceCentre',
        component: Comprehensive,
        children: [
            {
                path: 'menuone',
                name: 'menuone',
                component: () => import('../view/menuone/index.vue')
            }
        ]
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('../view/Login/index.vue')
    },
    {
        path: '/ErrorLog',
        name: 'ErrorLog',
        component: () => import('../view/ErrorLog/index.vue')
    }
]
export default routes