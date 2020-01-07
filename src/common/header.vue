<!--  -->
<template>
  <div class="header">
      <div class="left" @click="$router.go(-1)">
          <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="center"><span>{{title}}</span></div>
      <div class="right"></div>
  </div>
</template>

<script>
export default {
  name:'Header',
  props:[
      "title"
  ]
}

</script>
<style lang="stylus" scoped>
.header{
    display:flex;
    padding: 0.3rem 0;
    .left{
        width: 10%;
        i{
            color:#fff;
            font-size:40px;
        }
    }
    .center{
        width:75%;
        span{
            font-size:40px;
            color:#fff;
        }
    }
    .right{
        width:9%;
    }
}
</style>
