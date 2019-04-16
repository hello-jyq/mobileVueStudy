<template>
  <div>
    <!-- 顶部滑动区 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',index===0?'mui-active':'']"
            v-for="(item,index) in tabs"
            @click="getType(item.type)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- 图片列表 -->
    <ul>
      <li v-if="type==1" v-for="item in list" :key="item.soureid" style="background-color: #ccc;">
        <div v-if="item.type=='text'">
          <h3>{{item.top_commentsContent}}</h3>
          <p>{{item.text}}</p>
        </div>
        <div v-if="item.type=='image'">
          <img v-lazy="item.thumbnail">
        </div>
        <div v-if="item.type=='gif'">
          <img v-lazy="item.gif">
        </div>
        <div v-if="item.type=='video'">
          <video :src="item.video" controls="controls">您的浏览器不支持 video 标签。</video>
        </div>
      </li>
      <li v-if="type==2" v-for="item in list" :key="item.soureid">
        <h3>{{item.top_commentsContent}}</h3>
        <p>{{item.text}}</p>
      </li>
      <li v-if="type==3" v-for="item in list" :key="item.soureid" style="background-color: #ccc;">
        <img v-lazy="item.thumbnail">
      </li>
      <li v-if="type==4" v-for="item in list" :key="item.soureid" style="background-color: #ccc;">
        <img v-lazy="item.gif">
      </li>
      <li v-if="type==5" v-for="item in list" :key="item.soureid">
        <video :src="item.video" controls="controls">您的浏览器不支持 video 标签。</video>
      </li>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      all: [],
      tabs: [
        { type: 1, title: "全部" },
        { type: 2, title: "每日一笑" },
        { type: 3, title: "搞笑图片" },
        { type: 4, title: "gif动图" },
        { type: 5, title: "爆笑视频" }
      ],
      list: [],
      type: "1"
    };
  },
  created() {
    this.getType(1);
  },
  mounted() {
    //初始化
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getType(type) {
      this.type = type;
      console.log(type);
      this.$axios
        .get("https://www.apiopen.top/satinGodApi?type=" + type + "&page=1")
        .then(res => {
          this.list = res.data.data.splice(0, 8);
        });
    }
  }
};
</script>
<style scoped>
* {
  touch-action: pan-x;
}
ul {
  margin: 0;
  padding: 10px;
  padding-bottom: 10px;
}
li {
  text-align: center;
  list-style: none;
  margin-bottom: 10px;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
img {
  width: 100%;
  vertical-align: middle;
}
h3 {
  font-size: 16px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  margin-bottom: 5px;
}
p {
  background-color: beige;
  text-align: left;
  margin-bottom: 20px;
  text-indent: 25px;
}
video {
  width: 100%;
}
</style>