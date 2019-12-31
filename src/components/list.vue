<!-- 列表组件 -->
<template>
  <div class="list">
      <ul>
          <li v-for="(item,index) in recommendSongs" :key="index">
              <div class="img">
                  <img :src="item.picUrl"/>
              </div>
              <p>{{item.name}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"List",
    props:[
        "recommendSongs"
    ],
    created(){

    },
    methods:{

    }
}

</script>
<style lang="stylus" scoped>
.list{
    ul{
        li{
            width:33%;
            display:inline-block;
            .img{
                text-align:center;
                margin-top:0;
                img{
                    width:210px;
                    height:210px;
                    border-radius:8px;
                }
            }
            p{
                color:#757575;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
}
</style>