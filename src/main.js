// 入口文件
import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//安装axios
import axios from 'axios'
Vue.prototype.$axios = axios
//导入Mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入Mint-UI中的组件
import {Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入 router.js 路由模块
import router from './router'

//导入APP根组件
import app from './App.vue'


var vm = new Vue({
    el: '#app',
    router,
    render:c => c(app)

})
