export default {
  data() {
    return {
      newslist: []
    };
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
