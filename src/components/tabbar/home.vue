<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.img_src" :alt="item.img_name" :key="item.id">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <router-link to="/home/newList">
          <img src="../../images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <router-link to="home/photolist">
          <img src="../../images/menu2.png">
          <div class="mui-media-body">每日一笑</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../images/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../images/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../images/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../images/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: []
    };
  },
  created() {
    this.$axios
      .get("https://wd7397433882arhwgr.wilddogio.com/banner.json")
      .then(res => {
        // this.imgs=res.data.cdn_img
        // console.log(res.data);
        this.imgs = res.data;
      });
  },
  methods: {}
};
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9 {
  background-color: #ffffff;
}
.mui-grid-view.mui-grid-9 img {
  widows: 60px;
  height: 60px;
}
.mui-media-body {
  font-size: 14px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>


