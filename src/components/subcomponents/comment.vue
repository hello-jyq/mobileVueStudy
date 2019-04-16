<template>
  <div class="cmt-container">
    <h2>发表评论</h2>
    <hr>
    <textarea placeholder="请输入要评论的内容（最多BB120个字）" v-model="content"></textarea>
    <mt-button type="primary" size="large" v-on:click="posComment()">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, key, index) in comments" :key="index">
        <div
          class="cmt-title"
        >第{{index+1}}楼&nbsp;&nbsp;用户：{{item.username}}&nbsp;&nbsp;发表时间：{{item.time}}</div>
        <div class="cmt-body">{{item.content=''?'暂无评论':item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      comments: [],
      content: ""
    };
  },
  props: ["id"],
  created() {
    this.getPos();
  },
  methods: {
    getPos() {
      this.$axios
        .get("https://wd7397433882arhwgr.wilddogio.com/poscomment.json")
        .then(res => {
          this.comments = res.data;
          console.log(res);
        });
    },
    posComment() {
      //发表评论
      this.$axios
        .post("https://wd7397433882arhwgr.wilddogio.com/poscomment.json", {
          ID: this.id,
          username: "张三",
          time: Date.now(),
          content: this.content
        })
        .then(res => {
          Toast("发表成功");
          this.content = "";
          this.getPos();
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h2 {
    font-size: 18px;
  }
  textarea {
    font-size: 14x;
    height: 85px;
    margin: 0px;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
      }
    }
  }
}
</style>