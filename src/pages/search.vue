<!-- 搜索歌曲页面 -->
<template>
  <div class="container">
    <div class="searchBox">
      <div class="left" @click=goBack>
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="center">
        <input type="text" ref="input"/>
      </div>
      <div class="right" @click="search">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <div class="hotSearch">
      <P>热搜榜</P>
      <ul class="lists">
        <li class="list" v-for="(item,index) in hotDetail" :key="index">
          <a> 
            <div class="left">
              <span>{{index+1}}</span>
            </div>
            <div class="center">
              <p class="title">{{item.searchWord}}<img v-show="item.iconUrl" :src="item.iconUrl"/></p>
              <p class="desc">{{item.content}}</p>
            </div>
            <div class="right">
              <span>{{item.score}}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { search, searchKeywords, multimatch, suggest,searchHotDetail,defaultKeyWords } from "@/api/searchAPI";
export default {
  name: "Search",
  data() {
    return {
      defaultKeywords: {},
      suggest: [],
      hotDetail:[],
      realkeyword:''
    };
  },

  created() {
    // search('张').then(res=>{
    //   console.log(res)
    // })
    // searchKeywords().then(res=>{
    //   this.defaultKeywords=res.data;
    // })
    // multimatch('海阔天空').then(res=>{
    //   console.log(res)
    // })
    // suggest('张').then(res=>{
    //   this.suggest=res.result.allMatch;
    // })
    searchHotDetail().then(res=>{
      this.hotDetail=res.data;
    }).catch(res=>{
      Toast("获取失败，请检查网络")
    })
    defaultKeyWords().then(res=>{
      this.realkeyword=res.data.realkeyword;
    }).catch(res=>{
      Toast("获取失败，请检查网络")
    })
  },
  components: {},

  computed: {},

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    search(){
      this.realkeyword=this.$refs.input.value;
      
    }
  }
};
</script>
<style lang="stylus" scoped>
.container {
  padding: 42px 32px 16px 32px;
  font-size: 24px;

  .searchBox {
    display: flex;
    height: 60px;
    line-height: 60px;

    .left {
      width: 10%;
      text-align: center;

      i {
        color: #3A3A3A;
      }
    }

    .center {
      width: 78%;

      input {
        width: 100%;
        height: 50px;
        border: none;
        border-bottom: 1px solid #707070;
      }
    }

    .right {
      width: 10%;
      text-align: center;

      i {
        color: #AEAEAE;
      }
    }
  }
  
  .hotSearch{
    margin-top:84px;
    >p{
      font-size:32px;
      color:#3A3A3A;
      font-weight:600;
    }
    .lists{
      .list{
        margin-top:40px;
        a{
          display:flex;
          height: 95px;
          .left,.right{
            text-align:center;
          }
          .center{
            width:70%;
            height: 90px;
            img{
              width:50px;
              height:35px;
              margin-left:20px;
            }
            .title{
              font-size:32px;
            }
            .desc{
              color:#AEAEAE;
              font-size:28px;
              margin-top:14px;
            }
          }
          .left{
            width:10%;
            color:#F06A69;
            font-size:32px;
            height: 90px;
            line-height: 90px;
          }
          .right{
            width:20%;
            color:#AEAEAE;
            height: 90px;
            font-size:28px;
          }
        }
      }
    }
  }
}
</style>