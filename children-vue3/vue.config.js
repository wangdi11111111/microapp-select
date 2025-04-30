const { rules } = require('@typescript-eslint/eslint-plugin');

module.exports = {
  outputDir: 'intelligently',
  publicPath: '/intelligently',
  productionSourceMap: false,
  devServer: {
    hot: false,
    disableHostCheck: true,
    port: 8080,
    open: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  lintOnSave: false,
  // 自定义webpack配置
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        }
      ]
    }
  },
}
