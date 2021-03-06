// 入口文件
import Vue from "vue";

//导入路由的包
import VueRouter from "vue-router";
//安装路由
Vue.use(VueRouter);

//导入 时间插件 moment
import moment from "moment";
//自定义时间格式
Vue.filter("dateString", function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
});

//安装axios
import axios from "axios";
Vue.prototype.$axios = axios;
//导入Mui的样式
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";

//按需导入Mint-UI中的组件
// import { Header, Swipe, SwipeItem, button, Lazyload } from "mint-ui";
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(button.name, button);
// Vue.use(Lazyload);
//全部倒入
import MintUI from "mint-ui";
Vue.use(MintUI);
//导入 router.js 路由模块

import Meta from 'vue-meta'
Vue.use(Meta)

import router from "./router";
// /* 路由发生变化修改页面title */
// router.beforeEach((to, from, next) => {

//   /* 路由发生变化修改页面meta */
//   if (to.meta.content) {
//     let head = document.getElementsByTagName('head');
//     let meta = document.createElement('meta');
//     meta.content = to.meta.content;
//     head[0].appendChild(meta)
//   }
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })
//导入APP根组件
import app from "./App.vue";

var vm = new Vue({
  el: "#app",
  router,
  render: c => c(app)
});
