const { override, addLessLoader } = require('customize-cra')

module.exports = override(
  addLessLoader({
    lessOptions: {
      modifyVars: {
        'primary-color': '#1DA57A', // 这里是你想修改的 Ant Design 主题颜色
      },
      javascriptEnabled: true,
    },
  }),
)
