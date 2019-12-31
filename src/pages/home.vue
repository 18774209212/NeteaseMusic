<!--  -->
<template>
  <div class="container font">
      <div class="head">
          <div class="left">
              <i class="iconfont icon-zhankai"></i>
          </div>
          <div class="center">
              <ul class="tab">
                  <li>我的</li>
                  <li class="active">发现</li>
                  <li>云村</li>
                  <li>视频</li>
              </ul>
          </div>
          <div class="right">
              <i class="iconfont icon-sousuo"></i>
          </div>
      </div>
      <div class="banner">
        <Swipe :bannerList="bannerList"></Swipe>
      </div>
      <div class="category">
          <ul>
              <li>
                  <div class="item">
                      <i class="iconfont icon-icon"></i>
                  </div>
                  <p>每日推荐</p>
              </li>
              <li>
                  <div class="item">
                      <i class="iconfont icon-gedan"></i>
                  </div>
                  <p>歌单</p>
              </li>
              <li>
                  <div class="item">
                      <i class="iconfont icon-paixingbang"></i>
                  </div>
                  <p>排行榜</p>
              </li>
              <li>
                  <div class="item">
                      <i class="iconfont icon-diantai"></i>
                  </div>
                  <p>电台</p>
              </li>
          </ul>
      </div>
      <div class="recommend">
          <div class="head">
              <p>推荐歌单</p>
          </div>
          <div class="list">
              <List :recommendSongs="recommendSongs"></List>
          </div>
      </div>
  </div>
</template>

<script>
import {recommendSongs} from '@/api/musicAPI'
import Swipe from "@/components/swipe"
import List from "@/components/list"
export default { 
  name:'Home',
  data () {
    return {
        limit:6,
        bannerList:[
            {
                src:'static/imgs/banner1.jpg'
            },
            {
                src:'static/imgs/banner2.jpg'
            },
            {
                src:'static/imgs/banner3.jpg'
            },
            {
                src:'static/imgs/banner4.jpg'
            }
        ],
        recommendSongs:[]
    };
  },

  components: {
      Swipe,
      List
  },

  created(){
      recommendSongs(this.limit).then(res=>{
          let data=res.result;
          this.recommendSongs=data;
          console.log(this.recommendSongs)
      })
  },
  computed: {},

  mounted(){
  },
  methods: {}
}

</script>
<style lang="stylus" scoped>
.container{
    width:96%;
    padding:16px;
    font-size:24px;
    .head{
        .iconfont{
            color:#3E3E3E;
        }
        .left{
            width:9%;
            display:inline-block;
        }
        .center{
            width:80%;
            display:inline-block;
            .tab{
                li{
                    display:inline-block;
                    width:23%;
                    color:#ADADAD;
                    font-size:32px;
                    text-align:center;
                }
                .active{
                    font-size:36px;
                    color:#3E3E3E;
                }
            }
        }
        .right{
            width:9%;
            display:inline-block;
        }
    }
    .banner{
        margin-top:52px;
    }
    .category{
        margin-top:30px;
        ul{
            padding-inline-start: 0;
            li{
                display:inline-block;
                width:24%;
                text-align:center;
                .item{
                   width:96px;
                   height:96px;
                   line-height:96px;
                   text-align:center;
                   border-radius:50%;
                   margin: 0 auto;
                   background-image: linear-gradient(to right, #FE5B4C , #FB5E49,#FF1F15); 
                    i{
                        font-size:56px;
                        color:#fff;
                    }
                }
                p{
                    color:#545454;
                }
            }
        }
    }
    .recommend{
        .head{
            p{
                color:#323232;
                font-size:36px;
                font-weight:700;
            }
        }
    }
}


</style>