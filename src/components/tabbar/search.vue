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
        <option v-for="(author,index) in authors" :key='index'>{{author}}</option>
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
        <li v-for="(check,index) in blog.checks" :key='index'>{{check}}</li>
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
  methods: {
    post: function() {
      this.$axios
        .post("https://wd7397433882arhwgr.wilddogio.com/news.json", {
          img_src:
            "https://bos.nj.bpc.baidu.com/v1/mediaspot/eef289711329f4696a4a623047d620a6.jpeg",
          title: "暴力隔扣+关键抢断 季后赛首战小白又成马刺奇兵",
          id: 12,
          star: 3,
          con:
            "北京时间今天，马刺队以101比96力克掘金，在丹佛的魔鬼主场百事中心完成了以下克上。此役，马刺之所以能够斩获胜利，与一种年轻人的表现分不开关系。其中，在后卫线面临大规模伤病情况下临危受命的怀特，更是大放异彩。全场比赛，他出战28分钟，10投7中高效得到16分3板5助攻，更是在最后一刻完成了对穆雷的抢断，锁定胜局。" +
            "“我就是努力做好防守，在最后时刻找到了抢断的机会。毫无疑问，对于我们而言，这是一场至关重要的胜利，这是一场48分钟的战斗。我们知道这场比赛将非常艰难，我们需要在客场对阵一支非常出色的球队，很高兴能够拿下系列赛首战。”" +
            '<img src="http://pics1.baidu.com/feed/b21c8701a18b87d6ce1a2d28c995833c1e30fdd4.jpeg?token=dc9758f2bcdd73958794a4b4dc6a4d67&s=2D724982C2A280FD92DDE09B0300F091">' +
            "另一位年轻后卫福布斯出场30分钟，三分线外4投3中，得到15分5个篮板的数据。“我们都是竞争者，踏上赛场努力竞争。布林的表现很棒，他命中了一些关键三分。很高兴我们拿下了胜利，我们会总结比赛继续进步。”怀特说道。" +
            "从单臂隔扣米尔萨普到最后一个回合抢断穆雷锁定胜局，年轻的怀特不仅为老辣的马刺带来了年轻的激情，也贯彻了波波维奇最在意的防守意识和拼搏精神。而对于马刺来说，这种球队文化的传承就是这支球队在完成新老交替时，最渴望看到的特质。",
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
