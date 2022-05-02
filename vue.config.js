module.exports = {
  // devServer: {
  //   proxy: {
  //     "/usims": {
  //       target: "http://49.232.194.27:3000",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/usims": "",
  //       },
  //     },
  //   },
  // },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [],
    },
  },
};
