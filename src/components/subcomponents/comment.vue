<template>
  <div class="cmt-container">
    <h2>发表评论</h2>
    <hr>
    <textarea placeholder="请输入要评论的内容（最多BB120个字）" v-model="content"></textarea>
    <mt-button type="primary" size="large" v-on="posComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments">
        <div
          class="cmt-title"
        >第{{index+1}}楼&nbsp;&nbsp;用户：{{item.username}}&nbsp;&nbsp;发表时间：{{item.time}}</div>
        <div class="cmt-body">{{item.content=''?'暂无评论':item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      comments: [],
      content: ""
    };
  },
  props: ["id"],
  created() {
    this.$axios
      .get("https://wd7397433882arhwgr.wilddogio.com/.json")
      .then(res => {
        // console.log(res.data);
        this.comments = res.data;
      });
  },
  methods: {
    posComment() {
      //发表评论
      this.$axios.post(
        "https://wd7397433882arhwgr.wilddogio.com/poscomment.json",
        {
          ID: this.id,
          username: "",
          time: new data(),
          content: this.content
        }
      );
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