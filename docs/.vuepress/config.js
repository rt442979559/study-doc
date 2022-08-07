const path = require("path");
const { defaultTheme } = require('@vuepress/theme-default')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { viteBundler } = require('@vuepress/bundler-vite')

module.exports = {
  title: 'study | doc',
  logo: 'https://vuejs.org/images/logo.png',
  theme: defaultTheme({
    repo: 'rt442979559/study-doc',
    docsRepo: 'rt442979559/doc',
    description: 'ChiJiongHan | Doc | Study',
    docsDir: 'docs | study',
    smoothScroll:true,
    editLinks: false,
    sidebarDepth: 3,
    navbar: [
      { text: '主页', link: '/' },
      {
        text: '技巧',
        ariaLabel: 'skip',
        children: [
          { text: '图表', link: '/skip/echarts/' },
          { text: '方法', link: '/skip/methods/' },
          { text: '插件', link: '/skip/plugins/' },
          { text: '组件', link: '/skip/components/' },
        ]
      },
      {
        text: '地图',
        ariaLabel: 'map',
        children: [
          { text: '百度', link: '/map/demo/' },
          { text: '高德', link: '/map/downfile/' },
          { text: 'cesium', link: '/map/downfile/' }
        ]
      },
    ],
    sidebar:{
      '/skip/':[
        '/skip/echarts.md',
        '/skip/methods.md',
        '/skip/plugins.md',
        '/skip/components.md',
      ],
      '/map/':[
        '/map/downfile.md',
        '/map/demo.md',
      ]
    }
  }),
  plugins: [
    // 注册全局组件
    registerComponentsPlugin({
      // components:{
      //   'count':path.resolve(__dirname, './components/chart/count.vue')
      // },
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  // 引入别名
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@docs/, path.resolve(__dirname, '../')),
    },
  },
  // vite配置
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
}