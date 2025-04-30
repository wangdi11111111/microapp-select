<template>
  <div class="errPage-container">
    <el-button @click="back" icon='arrow-left' class="pan-back-btn">返回</el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <h2>您没有权限去该页面</h2>
        <ul class="list-unstyled">
          <li>或者您可以去:</li>
          <li class="link-type">
            <router-link to="/doWork/doWork">回首页</router-link>
          </li>
          <!-- <li class="link-type"><a href="http://www.sdcqjy.com/">随便看看</a></li>
          <li><a @click.prevent="dialogVisible=true" href="#">点我看图</a></li> -->
        </ul>
      </el-col>
      <el-col :span="12">
      </el-col>
    </el-row>
    <el-dialog title="随便看" :visible.sync="dialogVisible">
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'page401',
  data() {
    return {
      errGif: errGif + '?' + +new Date(),
      ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false
    }
  },
  methods: {
 
  }
}
</script>

