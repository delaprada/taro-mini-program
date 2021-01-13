module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/api/': {
          target: 'https://www.v2ex.com',
          changeOrigin: true,
          // pathRewrite: {
          //   '^/api/': '/'
          // },
        },
      },
    },
  },
}
