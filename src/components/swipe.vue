<!-- 轮播组件 -->
<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
        <mt-swipe-item  v-for="(item,index) in bannerList" :key="index">
            <img :src="item.imageUrl"/>
        </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name:"Swipe",
  props:[
      "bannerList"
  ]
}

</script>
<style lang="stylus" scoped>
.swipe{
    height:268px;
    border:none;
    img{
        width:100%;
        height:268px;
        border-radius:16px;
    }
    >>>.mint-swipe-indicator{
        opacity:1;
        background-color:#7E8285;
    }
    >>>.is-active{
        background-color:#D7413F;
    }
}
</style>