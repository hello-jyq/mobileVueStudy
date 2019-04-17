<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
      <label>标题</label>
      <input type="text" v-model="blog.title" required>
      <label>内容</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkBoxs">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.checks">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.checks">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.checks">
        <label>Angular.js</label>
        <input type="checkbox" value="Angular.js" v-model="blog.checks">
      </div>
      <label>作者：</label>
      <select v-model="blog.author">
        <option v-for="(author,index) in authors" :key="index">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">添加</button>
    </form>
    <div v-if="submmited">发布成功</div>
    <hr>
    <div id="preview">
      <h3>一览</h3>
      <p>标题：{{blog.title}}</p>
      <p>内容：{{blog.content}}</p>
      <p>分类：</p>
      <ul>
        <li v-for="(check,index) in blog.checks" :key="index">{{check}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        checks: [],
        author: ""
      },
      authors: ["张三", "李四", "王五"],
      submmited: false
    };
  },
  metaInfo: {
    // 如果子component中没有定义 metaInfo.title ，会默认使用这个title
    title: "搜索"
    // titleTemplate: '%s | 我的Vuejs网站'
  },
  methods: {
    post: function() {
      this.$axios
        .post("https://wd7397433882arhwgr.wilddogio.com/news.json", {
          img_src:
            "https://timg01.bdimg.com/timg?pacompress=&imgtype=0&sec=1439619614&di=072a73a378a60fc38013abd56924b486&quality=90&size=b870_10000&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fc71104ba43468e73fe4f63b1ebb032b3.jpeg",
          title: "暴力隔扣+关键抢断 季后赛首战小白又成马刺奇兵",
          id: 13,
          star: 32,
          con:
            '<img src="https://pics7.baidu.com/feed/d000baa1cd11728b44a09ed038256fcac1fd2c94.jpeg?token=02a9f88b0ea160de5c86fb0234380201&s=45409A4682C604FE4F8AA5B90300C012">' +
            "4月15日，李易峰在微博官宣签约新公司，表示：“欲穷千里目，更上一层楼。”工作室也转发该消息：“乘峰破浪，易往无前，未来让我们一起继续放肆生长！”" +
            "粉丝纷纷表示：“大事发生！”“未来可期！”“祝更上一层楼！”",
          posttime: new Date()
        })
        .then(res => {
          console.log(res.data);
          this.submmited = true;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
 +
            "接诊后，张丽珠提出一个大胆想法：开腹取卵。当时的条件，现在看来，简直不敢想象——全院只有一根取卵针，针头钝了就拿到钟表铺磨一磨；没有专业的保温设备，就把存放卵泡液的试管装在保温杯里；没有培养液，就自己照着方子配……即便如此，张丽珠团队依然成功地找到卵子，并顺利完成体外受精。受精卵开始分裂，张丽珠用一根特制的塑料管将受精卵植入郑桂珍子宫内。7周后，胎儿原始心脏有力地搏动，临床妊娠成功。" +
            "1988年3月10日，张丽珠成功接生一个小女婴，这就是我国首例试管婴儿。" +
            '<img src="https://pics6.baidu.com/feed/500fd9f9d72a60590c30a76e20f8989f023bbaf6.jpeg?token=e0580891ee9669866ea8d66d5e10c6a7&s=728AB147E6A200AC308064CC0300F010">' +
            "↑试管婴儿之母张丽珠教授与大陆首例试管婴儿郑萌珠"
-->
<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 800px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
textarea {
  height: 200px;
}
#checkBoxs label {
  display: inline-block;
  margin-top: 0;
}
#checkBoxs input {
  display: inline-block;
  margin-right: 10px;
}
button {
  display: block;
  margin: 20px 0px;
  background-color: red;
  color: #fff;
  border: 0px;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>
