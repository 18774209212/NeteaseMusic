<!-- 播放歌曲 -->
<template>
  <div class="box">
    <div class="container" v-if="songDetail&&songUrl">
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
          <img :src="songDetail.al.picUrl" :class="isRotate" />
        </div>
      </div>
      <div class="play">
        <div class="btns">
          <div>
            <i class="iconfont icon-xihuan02"></i>
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
            <span>{{formatTime(currentTime)}}</span>
          </div>
          <Progress :percent="percent" @percentChangeEnd="percentChangeEnd" @percentChange="percentChange"></Progress>
          <div>
            <span>{{formatTime(duration)}}</span>
          </div>
        </div>
        <div class="playBtns">
          <div class="left">
            <i class="iconfont" :class="modeIcon" @click="changeMode"></i>
          </div>
          <div class="right">
            <span>
              <i class="iconfont icon-shangyishoushangyige"></i>
            </span>
            <span>
              <i class="iconfont" :class="playIcon" @click="togglePlaying"></i>
            </span>
            <span>
              <i class="iconfont icon-xiayigexiayishou"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Loading></Loading>
    </div>
    <audio ref="audio" autoplay @timeupdate="timeupdate"></audio>
  </div>
</template>

<script>
import { getSongDetail, getSongUrl, getLyrc, collect } from "@/api/musicAPI";
import Loading from "@/common/loading/loading";
import Progress from "@/components/progress";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import {playMode} from "@/utils/config";
import {Toast} from 'mint-ui';
export default {
  name: "PlaySong",
  data() {
    return {
      songDetail: {},
      songUrl: "",
      currentTime: 0,
      duration: 0,
      percent: 0
      // playing:false
    };
  },

  components: {
    Loading,
    Progress
  },

  created() {
    // let id = this.$route.query.id;
    // this._getSong(id);
    // this._getSongUrl(id);
  },
  mounted() {
    // console.log(this.recommendList)
  },
  computed: {
    ...mapState({
      currentSong: state => state.currentSong,
      playing: state => state.playing,
      mode:state=>state.mode
    }),
    playIcon() {
      return this.playing ? "icon-ai07" : "icon-bofang";
    },
    isRotate() {
      return this.playing ? "play" : "pause";
    },
    modeIcon(){
      if(this.mode===playMode.sequence){
        Toast('顺序播放');
        return "icon-xunhuanbofang";
      }else if(this.mode===playMode.loop){
        Toast('单曲循环');
        return "icon-danquxunhuan";
      }else{
        Toast('随机播放');
        return "icon-suijibofang";
      }
    }
  },
  watch: {
    currentSong: {
      handler: function(newVal, oldVal) {
        //获取歌曲详情
        this._getSong(newVal.id);
        //获取歌曲url
        this._getSongUrl(newVal.id);
        this.$refs.audio.pause();
        this.$refs.audio.currentTime = 0;
      },
      immediate: true
    },
    songUrl(newUrl) {
      this.$refs.audio.src = newUrl;
      let stop = setInterval(() => {
        this.duration = this.$refs.audio.duration;
        if (this.duration) {
          clearInterval(stop);
        }
      }, 150);
    },
    currenTime() {
      this.percent = this.currentTime / this.duration;
    }
  },
  methods: {
    changeMode(){
      const mode=(this.mode+1)%3;
      this.setPlayMode(mode);
    },
    goBack() {
      this.$router.go(-1);
    },
    _getLyrc(id) {
      //获取歌词
      getLyrc(id).then(res => {
        // console.log("歌词", res);
      });
    },
    _getSong(id) {
      getSongDetail(id).then(res => {
        if (res.code === 200) {
          this.songDetail = res.songs[0];
        } else {
          Toast("获取歌曲详情失败");
        }
      });
    },
    _getSongUrl(id) {
      getSongUrl(id).then(res => {
        if (res.code == 200) {
          let url = res.data[0].url;
          this.$refs.audio.src = url;
          this.songUrl = url;
          this.setPlaying(true);
        } else {
          Toast("获取歌曲URL失败");
        }
      });
    },
    stopMusic() {
      this.$refs.audio.pause();
    },
    togglePlaying() {
      const audio = this.$refs.audio;
      this.setPlaying(!this.playing);
      this.playing ? audio.play() : audio.pause();
    },
    percentChange(percent) {
      const currentTime = percent * this.duration;
      this.currentTime = currentTime;
    },
    percentChangeEnd(percent) {
      const currentTime = percent * this.duration;
      this.$refs.audio.currentTime = currentTime;
      if (this.playing) {
        this.$refs.audio.play();
        this.setPlaying(true);
      }
    },
    formatTime(time) {
      time = time | 0;
      let minute = (time / 60) | 0;
      let second = time % 60 | 0;
      if (second < 10) {
        second = "0" + second;
      }
      return minute + ":" + second;
    },
    timeupdate(e){
      this.currentTime = e.target.currentTime
    },
    ...mapActions(["setPlaying"]),
    ...mapMutations({
      setPlayMode:'SET_MODE'
    })
  }
};
</script>
<style lang="stylus" scoped>
.box {
  background: -moz-linear-gradient(top, #485126 0%, #3D3B24 37%, #555E2F 68%, #49432B 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #485126), color-stop(37%, #3D3B24), color-stop(68%, #555E2F), color-stop(100%, #49432B));
  background: -webkit-linear-gradient(top, #485126 0%, #3D3B24 37%, #555E2F 68%, #49432B 100%);
  background: -o-linear-gradient(top, #485126 0%, #3D3B24 37%, #555E2F 68%, #49432B 100%);
  background: -ms-linear-gradient(top, #485126 0%, #3D3B24 37%, #555E2F 68%, #49432B 100%);
  background: linear-gradient(to bottom, #485126 0%, #3D3B24 37%, #555E2F 68%, #49432B 100%);
}

.container {
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

        &.play {
          animation: rotateImg 15s linear infinite;
          -webkit-animation: rotateImg 15s linear infinite;
        }

        &.pause {
          animation-fill-mode: forwards;
        }
      }
    }
  }

  .play {
    .btns {
      display: flex;
      margin-bottom: 30px;

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
    }

    >div:nth-child(1), >div:nth-child(3) {
      width: 15%;
      text-align: center;
      color: #fff;
    }
  }

  .playBtns {
    margin-top: 40px;
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