<template>
  <div class="app-wrapper">
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
export default {
  name: 'emptyLayout',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
