#这是描述文件

##用心去感受这个项目

### 重点描述啦啦啦啦啦啦啦啦卡啦啦啦啦哇哇哇哇阿拉拉拉队啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦肯定啦啦啦啦啦啦啦啦啦啦啦啦啦卡拉

## 命令行把修改后的代码上传到 github

    git inint 创建git
    git status  看提交状态

1. git add .
2. git commit -m '提交的注释'
3. git push
4. node-sass 依赖安装失败 先 npm uninstall node-sass 删除 再 npm install node-sass 重新安装

##制作首页 App 组件

1. 完成 Headder 区域，使用的是 Mint-UI 中的 Header 组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
3. 要在中间放置一个 router-view

## 改造 tabbar 位 routerlink

# 配置动态titie ,meta   使用插件 vue-meta
## 设置路由高亮

## 点击 tabbar 显示对应的路由组件

##加载首页轮播图数据 安装\$axios
npm install axios

1. 获取数据。使用 axios
2. 使用 axios 的 this.\$axios.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染到每个 item 项

##改造路由连接

1. 绘制页面 使用 Mui 中的 media-list.html
2. 使用 axios 获取数据
3. 渲染真实数据

##实现 新闻资讯列表 点击跳转到新闻详情

1. 把列表中的每一项改造为 router-link ,同时，在跳转的时候应该提供唯一的 id 标识符
2. 创建新闻详情的组件页面 newinfo.vue
3. 在路由模块中，将新闻相亲的路由地址 和 组件页面对应起来

##实现新闻详情的页面布局和数据渲染

## 单独封装一个 comment.vue 评论子组件

1. 先创建一个单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的页面中，手动导入 comment 组件

##获取所有评论和数据显示到页面中

1. 把文本框做双向数据绑定，
2. 给发表评论按钮绑定一个事件
3. 评论成功提示
4. 通过 axios 发送请求，提交给服务器
5. 评论成功刷新列表。。重新调一遍获取获取评论方法 getPos（）

##绘制 图片列表组件页面结构并美化样式

1. 制作 顶部的滑动条
2. 制作 底部的图片列表

###制作 顶部的滑动条中坑：

1. 需要借助于 MUI 中的 tab-top-webview-main.html
2. 去掉 .mui-fullscreen 类
3. 滑动条无法正常滑动，需要导入 js ,需要初始化  
   、、、
   mui('.mui-scroll-wrapper').scroll({
   deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值 0.0006
   });
   、、、
4. 严格模式引起冲突，关闭 webpack 打包严格模式 使用插件 babel-plugin-transform-remove-strict-mode

###制作图片列表区域

1. 图片列表需要使用懒加载技术，我们可以使用 mint-ui 提供现成的组件“lazy-load”
2. 渲染图片列表数据


