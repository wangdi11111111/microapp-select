<template>
  <div id="app">
    <!--登入动画-->
    <!-- <transition name="rotate-fall"> -->
    <router-view  class="app-router-view"></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
import 'vue-transition.css'
export default {
  name: 'App',
  created () {
    window.microApp && window.microApp.addDataListener(this.handleDataChange, true)
  },
  beforeDestroy () {
    window.microApp && window.microApp.removeDataListener(this.handleDataChange)
  },
  methods: {
    handleDataChange (data) {
      console.log('来自基座应用的数据', data)
      console.log('来自基座应用的数据router', data.path.replace('/education', ''))
      let routerV = data.path.replace('/education', '')
      this.$router.push({ path: routerV ? routerV : '/' })
    }
  }
}

</script>
<style>


</style>
