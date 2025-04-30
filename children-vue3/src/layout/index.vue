<template>
  <div style="display:flex;height:100%;">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'HomeView2',
  setup(){
    let isWa = ref(false)
    // 是否是微前端环境
    if (window.__MICRO_APP_ENVIRONMENT__) {
      isWa.value = true
    } else {
      isWa.value = false
    }
    return {
      isWa
    }
  }
})
</script>
