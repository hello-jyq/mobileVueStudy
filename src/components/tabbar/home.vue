<template>
    <div>
       <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="item in imgs"><img :src="item.cdn_img" :alt="item.name"></mt-swipe-item>
       </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgs:[]
        }
    },
    created(){
      this.$axios.get('https://www.apiopen.top/satinApi?type=1&page=1').then(res=>{
           // this.imgs=res.data.cdn_img
           console.log(res.data)
           this.imgs=res.data.data.splice(6)
      })  
    }
    ,
    methods:{

    }
    
}
</script>
<style scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe-item img{
width: 100%;
height: 100%;
}
</style>


