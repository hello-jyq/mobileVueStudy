<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist" :key="index">
      <router-link :to="'/home/newinfo/'+index">
        <img class="mui-media-object mui-pull-left" :src="item.img_src">
        <div class="mui-media-body">
          <h2>{{item.title}}</h2>
          <p class="mui-ellipsis">
            <span>发表时间：{{item.posttime | dateString}}</span>
            <span>点击次数：{{item.star}}次</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<script src="../../lib/mui/js/test.js">
//import sss from "../../lib/mui/js/test.js"
</script>


<style scoped>
.mui-table-view li h2 {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mui-table-view li .mui-ellipsis {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
</style>