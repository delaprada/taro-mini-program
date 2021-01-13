// const isH5 = process.env.CLIENT_ENV === 'h5';
// const HOST = '"https://www.v2ex.com"';

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  // defineConstants: {
  //   HOST: isH5 ? '"/api"' : HOST
  // },
  mini: {},
  h5: {
    devServer: {
      // host: '192.168.0.105',
      // port: 10086,
      proxy: {
        '/api/': {
          target: "https://www.v2ex.com",
          changeOrigin: true
          // pathRewrite: {
          //   '^/api/': '/'
          // },
        }
      }
    }
  }
}
