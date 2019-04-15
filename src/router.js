import VueRouter from "vue-router";

//导入对应的路有组件
import homeTabbar from "./components/tabbar/home.vue";
import memberTabbar from "./components/tabbar/member.vue";
import cartTabbar from "./components/tabbar/shoppingcart.vue";
import searchTabbar from "./components/tabbar/search.vue";
import newList from "./components/news/newsList.vue";
import newinfo from "./components/news/newinfo.vue";
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    //配置路由规则
    { path: "/", redirect: "/home" },
    { path: "/home", component: homeTabbar },
    { path: "/member", component: memberTabbar },
    { path: "/shoppingcart", component: cartTabbar },
    { path: "/search", component: searchTabbar },
    { path: "/home/newList", component: newList },
    { path: "/home/newinfo/:id", component: newinfo }
  ],
  linkExactActiveClass: "mui-active" //覆盖默认路由高亮的类（‘class’）
});

// 把路由对象暴露出去
export default router;
