<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
body{
  margin:0;
  padding:0;
}
>>>.iconfont{
  font-size: 40px;
}
body::-webkit-scrollbar {
    display: none;    
}
</style>
