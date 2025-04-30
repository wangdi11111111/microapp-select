'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const BASE_API = ''
module.exports = {
  NODE_ENV: '"development"',
  VUE_APP_TITILE: '"学校安全管理测试系统"',
  BASE_API: '"' + BASE_API + '"',

};

