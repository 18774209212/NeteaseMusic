<!-- 歌单页面 -->
<template>
  <div class="container">
    <div class="con">
      <Header title="歌单"></Header>
      <div class="content">
        <div class="left">
          <img src="static/imgs/songPic.jpg" />
        </div>
        <div class="right">
          <div class="title">
            <p>2020年，愿我们一切美好 如期而至</p>
          </div>
          <div class="uploadUser">
            <img src="static/imgs/songPic.jpg" />
            <p>北辰浅巷墨漓</p>
          </div>
        </div>
      </div>
      <div class="btns">
          <div>
            <i class="iconfont icon-jianyi"></i>
            <p>225</p>
          </div>
          <div>
            <i class="iconfont icon-fenxiang-1"></i>
            <p>178</p>
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
  </div>
</template>

<script>
import Header from "@/common/header";
export default {
  name: "SongSheet",
  data() {
    return {};
  },

  components: {
    Header
  },

  created() {},

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
}
</style>