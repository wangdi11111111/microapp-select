<template>
  <div style="height:500px;display: flex;">
    <div style="border: 1px solid #000;width: 500px;">
      <h1>主应用</h1>
      <el-select v-model="value" placeholder="请选择" style="width: 100%;margin-bottom: 20px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select><el-select v-model="value" placeholder="请选择" style="width: 100%;margin-bottom: 20px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select><el-select v-model="value" placeholder="请选择" style="width: 100%;margin-bottom: 20px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select><el-select v-model="value" placeholder="请选择" style="width: 100%;margin-bottom: 20px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select><el-select v-model="value" placeholder="请选择" style="width: 100%;margin-bottom: 20px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <micro-app
      style="height:500px;width: 500px;border: 1px solid red;"
      name='intelligence'
      :url='microUrl'
      baseroute='/intelligence'
      inline
      disable-memory-router
      :data='microAppData'
      @created='handleCreate'
      @beforemount='handleBeforeMount'
      @mounted='handleMount'
      @unmount='handleUnmount'
      @error='handleError'
      @datachange='handleDataChange'
    ></micro-app>
  </div>
</template>

<script>
export default {
  name: 'intelligence',
  data () {
    return {
      microUrl: '',
      microAppData: {msg: '来自基座的数据'},
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },
  created(){
    this.microUrl = window.__microIntelligencePath
  },
  // watch: {
  //    '$route'(to, from) {
  //     // 在这里可以处理路由变化时的逻辑
  //     console.log('主页面跳转路由------------', to)
  //     let pathV = to.path.replace('/intelligence', '')
  //     microApp.setData('intelligence', { path: pathV })
  //   }
  // },
  methods: {
    handleCreate () {
      console.log('child-vue2 创建了')
    },

    handleBeforeMount () {
      console.log('child-vue2 即将被渲染')
      let pathV = this.$route.path
      // let pathV = this.$route.path.replace('/intelligence', '')
      this.microAppData = {path: pathV}
    },
    handleMount () {
      console.log('child-vue2 已经渲染完成')
      console.log('切换路由',this.$route)

      // setTimeout(() => {
      //   this.microAppData = {msg: '来自基座的新数据'}
      // }, 2000)
    },

    handleUnmount () {
      console.log('child-vue2 卸载了')
    },

    handleError () {
      console.log('child-vue2 加载出错了')
    },

    handleDataChange (e) {
      console.log('来自子应用 child-vue2 的数据:', e.detail.data)
    },
  }
}
</script>
