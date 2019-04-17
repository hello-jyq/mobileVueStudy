export default {
  data() {
    return {
      newslist: []
    };
  },
  metaInfo: {
    // 如果子component中没有定义 metaInfo.title ，会默认使用这个title
    title: "新闻资讯"
    // titleTemplate: '%s | 我的Vuejs网站'
  },
  created() {
    this.$axios
      .get("https://wd7397433882arhwgr.wilddogio.com/news.json")
      .then(res => {
        this.newslist = res.data;
        // console.log(Object.keys(this.newslist));
      });
  }
};
