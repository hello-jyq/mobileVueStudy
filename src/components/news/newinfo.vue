<template>
  <!-- 新闻柱体 -->
  <div>
    <br>
    <br>
    <br>
    <br>新闻详细---ID:
    <span>{{paramID}}</span>
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
      paramID: this.$route.params.id //将url地址传递过来的id值，挂载到data上，方便以后调用
    };
  },
  components: {
    comment: comment
  }
};
</script>
<style scoped>
span {
  font-size: 200px;
}
</style>