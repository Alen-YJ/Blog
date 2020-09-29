module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    moment: {
      locales: ["cn"]
    }
  },

  pwa: {
    name: 'Blog'
  },
  devServer:{
    proxy:{
      "/":{
        target:"http://localhost:3000",
        changeOrigin:true,
        pathRewrite:{
          "^/api":"api"
        }
      }
    }
  }
};
