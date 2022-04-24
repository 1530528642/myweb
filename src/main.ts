import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import ElementPlus from 'element-plus' // 引入element-plus
import 'element-plus/theme-chalk/index.css' // 引入element-plus的样式
import axios from './http/index'
const app = createApp(App)
app.use(Router)
.use(ElementPlus)
.mount('#app')
// console.log(app)
app.config.globalProperties.$http = axios;