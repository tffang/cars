module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended', // 加入 prettier 推荐配置
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // 开启 prettier 规则
  },
}
