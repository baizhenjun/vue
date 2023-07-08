const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {  //配置代理服务器
    proxy: {
      "/audit": {
        target: "http://127.0.0.1:8090",
      },
    },
  },
})
