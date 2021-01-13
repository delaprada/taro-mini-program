const config = {
  projectName: 'taro-mini-program',
  date: '2021-1-10',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  babel: {
    sourceMap: true,
    presets: [
      'env'
    ],
    plugins: [
      'transform-class-properties',
      ['transform-runtime', {
        helpers: false,
        polyfill: false,
        regenerator: true,
        moduleName: 'babel-runtime'
      }
      ]
    ]
  },
  typescript: {
    compilerOptions: {
      allowSyntheticDefaultImports: true,
      baseUrl: '.',
      declaration: false,
      experimentalDecorators: true,
      jsx: 'react',
      jsxFactory: 'Nerv.createElement',
      module: 'commonjs',
      moduleResolution: 'node',
      noImplicitAny: false,
      noUnusedLocals: true,
      outDir: './dist/',
      preserveConstEnums: true,
      removeComments: false,
      rootDir: '.',
      sourceMap: true,
      strictNullChecks: true,
      target: 'es6'
    },
    include: [
      'src/**/*'
    ],
    exclude: [
      'node_modules'
    ],
    compileOnSave: false
  },
  plugins: [
    '@tarojs/plugin-less'
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain, webpack) {
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
