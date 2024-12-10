module.exports = {
  style: {
    postcss: {
      plugins: [require('autoprefixer')],
    },
    less: {
      modifyVars: {
        'primary-color': '#1DA57A',
        'link-color': '#1DA57A',
        // 其他主题变量
      },
      javascriptEnabled: true,
    },
  },
}
