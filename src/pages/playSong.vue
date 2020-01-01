<!-- 播放歌曲 -->
<template>
  <div class="box">
    <div class="container">
      <div class="head">
        <div class="left" @click="goBack">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="center">
          <p>{{songDetail.al.name}}</p>
          <p>{{songDetail.ar[0].name}}</p>
        </div>
        <div class="right">
          <i class="iconfont icon-fenxiang-1"></i>
        </div>
      </div>
      <div class="album">
        <div class="img">
          <img :src="songDetail.al.picUrl" />
        </div>
      </div>
      <div class="play">
        <div class="btns">
          <div>
            <i class="iconfont icon-shoucang"></i>
          </div>
          <div>
            <i class="iconfont icon-xiazai"></i>
          </div>
          <div>
            <i class="iconfont icon-jianyi"></i>
          </div>
          <div>
            <i class="iconfont icon-gengduo"></i>
          </div>
        </div>
        <div class="progress">
          <div>
            <span>00:00</span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span>03:30</span>
          </div>
        </div>
        <div class="playBtns">
          <div class="left">
            <i class="iconfont icon-suijibofang"></i>
          </div>
          <div class="right">
            <span>
              <i class="iconfont icon-shangyishoushangyige"></i>
            </span>
            <span>
              <i class="iconfont icon-bofang"></i>
            </span>
            <span>
              <i class="iconfont icon-xiayigexiayishou"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSongDetail } from "@/api/musicAPI";
export default {
  name: "PlaySong",
  data() {
    return {
      songDetail: {}
    };
  },

  components: {},

  created() {
    let id = this.$route.query.id;
    getSongDetail('1409382131').then(res=>{
        this.songDetail=res.songs[0];
    })
  },
  mounted() {
   
  },
  computed: {},

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="stylus" scoped>
.box {
  overflow: hidden;
  background: -moz-linear-gradient(top, #485126 0%, #3D3B24 37%, #555E2F 68%, #49432B 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #485126), color-stop(37%, #3D3B24), color-stop(68%, #555E2F), color-stop(100%, #49432B));
  background: -webkit-linear-gradient(top, #485126 0%, #3D3B24 37%, #555E2F 68%, #49432B 100%);
  background: -o-linear-gradient(top, #485126 0%, #3D3B24 37%, #555E2F 68%, #49432B 100%);
  background: -ms-linear-gradient(top, #485126 0%, #3D3B24 37%, #555E2F 68%, #49432B 100%);
  background: linear-gradient(to bottom, #485126 0%, #3D3B24 37%, #555E2F 68%, #49432B 100%);
}

.container {
  overflow: hidden;
  padding: 60px 32px 16px 32px;

  .head {
    display: flex;

    i {
      color: #fff;
    }

    .left {
      width: 9%;
      height: 90px;
      line-height: 90px;
      text-align: center;
    }

    .center {
      width: 78%;
      margin-left: 3%;
      height: 90px;

      p:nth-child(1) {
        font-size: 40px;
        color: #fff;
        font-family: 'Segoe UI';
      }

      p:nth-child(2) {
        color: #8A856F;
      }
    }

    .right {
      width: 9%;
      height: 90px;
      line-height: 90px;
      text-align: center;
    }
  }

  .album {
    margin: 150px 0 180px 0;

    .img {
      text-align: center;

      img {
        width: 492px;
        height: 492px;
        border-radius: 50%;
        border: 10px solid #506E46;
        // animation:rotateImg 15s linear  infinite;
        // -webkit-animation:rotateImg 15s linear infinite;
      }
    }
  }

  .play {
    .btns {
      display: flex;

      >div {
        width: 25%;
        text-align: center;
        color: #fff;

        .iconfont {
          font-size: 52px;
        }
      }

      >div:nth-child(1), >div:nth-child(4) {
        .iconfont {
          font-size: 48px;
        }
      }
    }
  }

  .progress {
    margin-top: 56px;
    display: flex;

    >div:nth-child(2) {
      width: 70%;
      height: 5px;
      background-color: #fff;
    }

    >div:nth-child(1), >div:nth-child(3) {
      width: 15%;
      text-align: center;
      color: #fff;
    }
  }

  .playBtns {
    margin-top: 80px;
    margin-bottom: 40px;
    display: flex;

    i {
      font-size: 52px;
      color: #fff;
    }

    .left {
      width: 15%;
      text-align: center;
    }

    .right {
      width: 75%;

      span {
        display: inline-block;
        margin-left: 90px;
      }
    }
  }
}

@keyframes rotateImg {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>