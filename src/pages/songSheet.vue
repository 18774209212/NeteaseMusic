<!-- 歌单页面 -->
<template>
  <div class="container">
    <div class="con">
      <Header title="歌单"></Header>
      <div class="content">
        <div class="left">
          <img :src="listDetail.coverImgUrl" />
        </div>
        <div class="right">
          <div class="title">
            <p>{{listDetail.name}}</p>
          </div>
          <div class="uploadUser">
            <img :src="listDetail.creator.avatarUrl" />
            <p>{{listDetail.creator.nickname}}</p>
          </div>
        </div>
      </div>
      <div class="btns">
          <div>
            <i class="iconfont icon-jianyi"></i>
            <p>{{listDetail.commentCount}}</p>
          </div>
          <div>
            <i class="iconfont icon-fenxiang-1"></i>
            <p>{{listDetail.shareCount}}</p>
          </div>
          <div>
            <i class="iconfont icon-xiazai"></i>
            <p>下载</p>
          </div>
          <div>
            <i class="iconfont icon-xuanze-duoxuan-tianchong"></i>
            <p>多选</p>
          </div>
      </div>
    </div>
    <div class="song-list-wrapper" v-show="listDetail.tracks">
      <div class="head"> 
        <span class="first">播放全部</span>
        <span>(共{{listDetail.tracks.length}}首)</span>
      </div>
      <div class="list">
        <SheetList :songSheet="listDetail.tracks"></SheetList>
      </div>
    </div>
    <div v-show="!listDetail.tracks">
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import Header from "@/common/header/header";
import Loading from "@/common/loading/loading"
import {getRecommendListDetail} from "@/api/musicAPI"
import {Toast} from "mint-ui"
import SheetList from "@/components/sheetList"
export default {
  name: "SongSheet",
  data() {
    return {
      listDetail:[]
    };
  },

  components: {
    Header,
    SheetList,
    Loading
  },

  created() {
    var listId=this.$route.query.listId;
    getRecommendListDetail(listId).then(res=>{
      if(res.code==200){
        this.listDetail=res.playlist;
        if(this.listDetail.shareCount>=10000){
          this.listDetail.shareCount=Math.floor(this.listDetail.shareCount/1000)+'万';
        }
        if(this.listDetail.commentCount>=10000){
          this.listDetail.commentCount=Math.floor(this.listDetail.commentCount/1000)+'万';
        }
      }else{
        Toast("获取歌曲失败")
      }
    })
  },

  computed: {},

  methods: {}
};
</script>
<style lang="stylus" scoped>
.container {
  .con {
    padding: 16px 32px 16px 32px;
    background-color:#C6BABA;
    .content {
      display: flex;
      margin:74px 0 46px 0;
      .left {
        width: 40%;

        img {
          width: 260px;
          height: 260px;
          border-radius:10px;
        }
      }

      .right {
        width: 58%;
        padding-left: 2%;

        .title {
          p {
            font-size: 40px;
            color:#fff;
          }
        }

        .uploadUser {
            margin-top:20px;
            color:#fff;
            display :flex;
            height:70px;
          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }
          p{
              line-height:70px;
              padding-left:10px;
          }
        }
      }
    }
    .btns {
      display: flex;
      padding-bottom:40px;
      >div {
        width: 25%;
        text-align: center;
        color: #fff;
        vertical-align:bottom;
        .iconfont{
          font-size: 52px;
        }
        .icon-xuanze-duoxuan-tianchong{
            font-size:48px;
        }
        p{
            font-size:28px;
            color:#fff;
        }
      }
    }
  }
  .song-list-wrapper{
    width:100%;
    font-family: 'Segoe UI';
    position: absolute;
    top: 46%;
    background: #fff;
    border-radius:40px 40px 0 0;
    .head{
      span:nth-child(1){
        display:inline-block;
        padding:36px 0 16px 90px;
        font-size:36px;
        color:#383A39;
      }
      span:nth-child(2){
        font-size:32px;
        color:#9C9C9C;
      }
    }
  }
}
</style>