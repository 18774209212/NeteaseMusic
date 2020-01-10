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
          <div class="right" @click="search">
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
              <List :recommendSongs="recommendSongs" @select="selectItem"></List>
          </div>
      </div>
      <div class="recommend">
          <div class="head">
              <p>推荐歌曲</p>
          </div>
          <div class="list">
              <SongList :newSongs="newSongs" @selectSong="selectSong"></SongList>
          </div>
      </div>
  </div>
</template>

<script>
import {recommendSongs,recommendNewSongs} from '@/api/musicAPI'
import Swipe from "@/components/swipe"
import List from "@/components/list"
import SongList from "@/components/songList"
import {mapMutations} from "vuex"
export default { 
  name:'Home',
  data () {
    return {
        limit:9,
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
        recommendSongs:[],
        newSongs:[]
    };
  },

  components: {
      Swipe,
      List,
      SongList
  },

  filters: {
    million: function(value) {
        let num;
      //过万处理
      if (value > 9999) {
        //大于9999显示x.xx万
        num = Math.floor(Math.floor(value / 1000) / 10) + "万";
      } else if (value < 9999 && value > -9999) {
        num = value;
      } else if (value < -9999) {
        //小于-9999显示-x.xx万
        num = -(Math.floor(Math.abs(value) / 1000) / 10) + "万";
      }
      return num;
    }
  },
  created(){
      recommendSongs(this.limit).then(res=>{
          let data=res.result;
          for(var i=0;i<data.length;i++){
            data[i].playCount=this.$options.filters['million'](data[i].playCount);
          }
          this.recommendSongs=data;
          this.$store.commit('SET_SONGLIST',data)
      });
      recommendNewSongs(this.limit).then(res=>{
          let result=res.result;
          this.newSongs=result.slice(0,9);
      })
  },
  computed: {},
  
  mounted(){
  },
  methods: {
      search(){
        this.$router.push({path:'/search'})
      },
      selectItem(item,index){
          this.$router.push({path:'/songSheet',query:{listId:item.id}});
      },
      selectSong(item){
          this.$router.push({path:'/playSong'});
          console.log("选择的歌曲",item);
      }
  }
}

</script>
<style lang="stylus" scoped>
.container{
    padding:16px 32px 16px 32px;
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
                    height:64px;
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