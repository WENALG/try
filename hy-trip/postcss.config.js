module.exports = {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375, // 视口的宽度，对应的是我们设计稿的宽度，一般是750
        viewportHeight: 667, // 视口的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
        unitPrecision: 3, // 指定 px 转换为视口单位值的小数位数
        viewportUnit: 'vw', // 指定需要转换成的视口单位，建议使用 vw
        selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视口单位的类名，可以自定义
        minPixelValue: 1, // 小于等于1px的不转换
        mediaQuery: false // 允许在媒体查询中转换 px
      }
    }
  }
  