<!--  -->
<template>
  <div class="songSheet">
      <ul>
          <li v-for="(item,index) in songSheet" :key="index" @click="selectItem(item,index)">
              <div class="count">
                  {{index+1}}
              </div>
              <div class="name">
                  <p>{{item.name}}</p>
                  <p class="singer">{{joinName(item)}}</p>
              </div>
              <div class="play" @click="play(item,index)">
                  <i class="iconfont icon-bofang1"></i>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'SheetList',
    props:["songSheet"],
    methods:{
        selectItem(item,index){
            this.$emit("playMusic",item,index);
        },
        joinName(song){
            let singer=[];
            let str='';
            let ar=song.ar;
            if(ar.length){
                for(var i=0;i<ar.length;i++){
                    singer.push(ar[i].name);
                }
                str=singer.join('/');
                return str;
            }else{
                return '';
            }
        },
        play(item,index){
            this.$emit('play',item,index);
        }
    }
}

</script>
<style lang="stylus" scoped>
.songSheet{
    ul{
        li{
            color:#9C9C9C;
            display:flex;
            padding:0.2rem 0;
            .count{
                width:12%;
                text-align:center;
                font-size:32px;
            }
            .name{
                width:70%;
                font-size:32px;
                p:nth-child(1){
                    color:#383A39;
                }
                .singer{
                    font-size:26px;
                }
            }
            .play{
                width:15%;
                text-align:center;
                i{
                    font-size:50px;
                }
            }
        }
    }
}
</style>