<template>
  <!-- 新闻柱体 -->
  <div>
    <br>新闻详细---ID:
    <span>{{paramID}}</span>
    <br>
    <br>
    <div v-html="con"></div>
    <br>
    <br>
    <!-- 评论部分 -->
    <comment :id="this.paramID"></comment>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      title: this.$route.params.id, //将url地址传递过来的id值，挂载到data上，方便以后调用;
      paramID: this.$route.params.id, //将url地址传递过来的id值，挂载到data上，方便以后调用;
      con: ""
      //title: "首页"
    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    };
  },
  created() {
    this.$axios
      .get(
        "https://wd7397433882arhwgr.wilddogio.com/news/" +
          this.paramID +
          ".json"
      )
      .then(res => {
        this.con = res.data.con;
        // console.log(res.data);
      });
  },
  components: {
    comment: comment
  }
};
</script>
<style scoped>
</style>