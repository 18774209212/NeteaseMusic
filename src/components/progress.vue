<!--歌曲进度条-->
<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn"
      @touchstart.prevent="progressTouchStart"
      @touchmove.prevent="progressTouchMove"
      @touchend.prevent="progressTouchEnd">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>
<script>
const progressBtnWidth=16;
export default {
    data() {
        return{
            newPercent:0,
        }
    },
    props:{
        percent:{
           type:Number,
           default:0 
        }
    },
    created(){
        this.touch={};
    },
    methods:{
        progressClick(e){
            //获取某元素相对于视窗位置的集合
            const react=this.$refs.progressBar.getBoundingClientRect();
            // e.pageX 点击距离左边的距离
            const offsetWidth=e.pageX-react.left;
            this._offset(offsetWidth);
            const barWidth=this.$refs.progressBar.clientWidth-progressBtnWidth;
            const percent=this.$refs.progress.clientWidth/barWidth;
            this.$emit("percentChangeEnd",percent);
        },
        progressTouchStart(e){
            this.touch.initiated=0;
            this.touch.startX=e.touches[0].startX;
            this.touch.left=this.$refs.progress.clientWidth;
        },
        progressTouchMove(e){
            if(!this.touch.initiated){
                return;
            }
            this._triggerPercent()
            const deltaX = e.touches[0].pageX - this.touch.startX
            //这句不是很明白
            const offsetWidth = Math.min(Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX)))
            this._offset(offsetWidth)
        },
        progressTouchEnd(e){
            this.touch.initiated=false;
            const barWidth=this.$refs.progressBar.clientWidth-progressBtnWidth;
            const percent=this.$refs.progress.clientWidth/barWidth;
            this.$emit("percentChangeEnd",percent);
        },
        _offset (offsetWidth) {
            this.$refs.progress.style.width = `${offsetWidth}px`
            this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px, 0, 0)`
        },
        _triggerPercent(){
            const barWidth=this.$refs.progressBar.clientWidth-progressBtnWidth;
            const percent=this.$refs.progress.clientWidth/barWidth;
            this.$emit("percentChange",percent);
        }
    },
    watch:{
      percent (newPercent) {
        console.log("newPercent",newPercent)
        if (newPercent >= 0 && !this.touch.initiated) {
          const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
          const offsetWidth = newPercent * barWidth
          this._offset(offsetWidth)
        }
      }
    }
}
</script>
<style lang='stylus' scoped>
.progress-bar {
  height: 40px;
  .bar-inner {
    position: relative;
    top: 13px;
    height: 4px;
    background: rgba(0, 0, 0, 0.3);
    .progress {
      position: absolute;
      height: 100%;
      background: #FF1F15;
    }
    .progress-btn-wrapper {
      position: absolute;
      left: -15px;
      top: -20px;
      width: 30px;
      height: 30px;
      .progress-btn {
        position: relative;
        top: 7px;
        left: 7px;
        box-sizing: border-box;
        width: 32px;
        height: 32px;
        border: 10px solid #f1f1f1;
        border-radius: 50%;
        background: #FF1F15;
      }
    }
  }
}
</style>
