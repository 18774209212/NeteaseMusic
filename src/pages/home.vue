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
              <Loading v-if="recommendSongs.length<=0"></Loading>
              <List v-else :recommendSongs="recommendSongs" @select="selectItem"></List>
          </div>
      </div>
      <div class="recommend">
          <div class="head">
              <p>推荐歌曲</p>
          </div>
          <div class="list">
              <Loading v-if="newSongs.length<=0"></Loading>
              <SongList :newSongs="newSongs" @selectSong="selectSong"></SongList>
          </div>
      </div>
  </div>
</template>

<script>
import {recommendSongs,recommendNewSongs,banner} from '@/api/musicAPI'
import Swipe from "@/components/swipe"
import List from "@/components/list"
import SongList from "@/components/songList"
import Loading from "@/common/loading/loading"
import {mapMutations, mapActions, mapState} from "vuex"
import {Toast} from "mint-ui"
import checkSong from "@/utils/checkSong"
export default { 
  name:'Home',
  data () {
    return {
        limit:9,
        bannerList:[],
        recommendSongs:[],
        newSongs:[]
    };
  },

  components: {
      Swipe,
      List,
      SongList,
      Loading
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
  computed:{
    ...mapState({
        'musicList':state=>state.musicList
    })
  },
  created(){
      this.getBanner();
      this.getRecommendSongs();
      this.getRecommendNewSongs();
  },

  mounted(){
      
  },
  methods: {
    ...mapActions([
        'setCurrentSong',
        'setMusicList'
    ]),
      getBanner(){
          banner().then(res=>{
              if(res.code===200){
                  this.bannerList=res.banners;
              }else{
                  Toast('获取banner图失败');
              }
          })
      },
      getRecommendSongs(){
        recommendSongs(this.limit).then(res=>{
          let data=res.result;
          for(var i=0;i<data.length;i++){
            data[i].playCount=this.$options.filters['million'](data[i].playCount);
          }
          this.recommendSongs=data;
        });
      },
      getRecommendNewSongs(){
        recommendNewSongs(this.limit).then(res=>{
          let result=res.result;
          this.newSongs=result.slice(0,9);
        })
      },
      search(){
        this.$router.push({path:'/search'})
      },
      selectItem(item,index){
        this.$router.push({path:'/songSheet',query:{
            listId:item.id
        }});
      },
      selectSong(item){
          this.$router.push({path:'/playSong',query:{
              id:item.id
          }});
        //   debugger
          let list=this.musicList;
          if(!(checkSong.check(list,item))){
              list.push(item)
          }
          this.setMusicList(list);
        //   console.log(this.musicList)
          //把当前播放的歌曲存起来
          this.setCurrentSong(item);
      },
    //   check(list,item){
    //       for(var i=0;i<list.length;i++){
    //           if(list[i].id==item.id) return true;
    //           else return false;
    //       }
    //   }
  }
}

</script>
<style lang="stylus" scoped>
.container{
    font-size:24px;
    padding:1% 2% 1% 2%;
    .head{
        .iconfont{
            color:#3E3E3E;
        }
        .left{
            width:8%;
            display:inline-block;
        }
        .center{
            width:80%;
            display:inline-block;
            .tab{
                li{
                    display:inline-block;
                    width:20%;
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
            width:8%;
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