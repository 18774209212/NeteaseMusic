<!-- 列表组件 -->
<template>
  <div class="list">
    <ul>
      <li v-for="(item,index) in recommendSongs" :key="index">
        <div class="img">
          <img :src="item.picUrl" />
          <p class="playCount">
            <i class="iconfont icon-bofangsanjiaoxing"></i>
            <span>{{item.playCount}}</span>
          </p>
        </div>
        <p class="name">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["recommendSongs"]
};
</script>
<style lang="stylus" scoped>
.list {
  ul {
    li {
      width: 33%;
      display: inline-block;
      padding-bottom:0.2rem;
      .img {
        margin-top: 0;
        position: relative;

        img {
          width: 210px;
          height: 210px;
          border-radius: 8px;
        }
        .playCount{
            position:absolute;
            top:8%;
            right:10%;
            i,span{
                font-size: 24px;
                color: #fff;
            }

        }
      }
      .name {
        color: #545454;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        // -webkit-line-clamp: 2;
        // line-clamp: 2;
        -webkit-box-orient: vertical;
        span{
            color:#757575;
        }
      }
    }
  }
}
</style>