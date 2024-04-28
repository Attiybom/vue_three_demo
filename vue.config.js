const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置代理
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8111",
        changeOrigin: true,
        pathRewrite: {
          // '^/api': '/api'  //实际请求地址是http://localhost:8111/api/news/list
          // "^/api": "/", //实际请求地址是http://localhost:8111/news/list
          // 我的理解就是http://localhost:8111替换了/api/news/list里面的/api
        },
      },
    },
  },
});
