<!-- 列表组件 -->
<template>
  <div class="list">
    <ul>
      <li v-for="(item,index) in newSongs" :key="index" @click="toPlaySong(item.id)">
        <div class="img">
          <img :src="item.picUrl" />
          <p class="playCount" v-if="item.playCount">
            <i class="iconfont icon-bofangsanjiaoxing"></i>
            <span>{{item.playCount}}</span>
          </p>
        </div>
        <p class="name songName">{{item.song.name}}</p>
        <p class="name artist" v-if="item.song">
            <span v-for="(i,k) in item.song.artists" :key="k">{{i.name}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SongList",
  props: ["newSongs"],
  methods:{
      toPlaySong(id){
          this.$router.push({path:'/playSong',query:{id:id}})
      }
  }
};
</script>
<style lang="stylus" scoped>
.list {
  ul {
    li {
      width: 33%;
      display: inline-block;

      .img {
        margin-top: 0;
        position: relative;
        padding-bottom:0.2rem;
        img {
          width: 210px;
          height: 210px;
          border-radius: 8px;
        }
        .playCount{
            position:absolute;
            top:-8%;
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
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        span{
            color:#757575;
        }
      }
      .artist{
        margin-block-start: 0em;
      }
      .songName{
          margin-block-end: 0em;
      }
    }
  }
}
</style>