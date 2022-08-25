const path = require('path')
const { defaultTheme } = require('@vuepress/theme-default')
const {
  registerComponentsPlugin,
} = require('@vuepress/plugin-register-components')
const { viteBundler } = require('@vuepress/bundler-vite')
const { prismjsPlugin } = require('@vuepress/plugin-prismjs')

const autometa_options = {
  site: {
    name: 'ChiJiongHan',
  },
  canonical_base: 'https://rt442979559.github.io/',
}

module.exports = {
  port: '8080', //端口号
  title: 'study | doc',
  description: 'ChiJiongHan | Study | Doc',
  logo: '🚀',
  theme: defaultTheme({
    repo: 'rt442979559/study-doc',
    docsRepo: 'rt442979559/doc',
    docsDir: 'docs | study',
    smoothScroll: true,
    editLink: false,
    sidebarDepth: 3,
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
      ],
      ['meta', { name: 'keywords', content: 'ChiJiongHan | 技术文档' }],
      [
        'meta',
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    ],
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
        ],
      },
      {
        text: '资源',
        ariaLabel: 'resource',
        children: [{ text: '工具', link: '/resource/utils/' }],
      },
      {
        text: '地图',
        ariaLabel: 'map',
        children: [
          { text: '百度', link: '/map/bdmap/' },
          { text: '高德', link: '/map/gdmap/' },
          { text: 'cesium', link: '/map/cesium/' },
        ],
      },
    ],
    sidebar: {
      '/skip/': [
        '/skip/echarts.md',
        '/skip/methods.md',
        '/skip/plugins.md',
        '/skip/components.md',
      ],
      '/map/': ['/map/bdmap.md', '/map/gdmap.md', '/map/cesium.md'],
      '/resource/': ['/resource/utils.md'],
    },
  }),
  plugins: [
    // 注册全局组件
    registerComponentsPlugin({
      // components:{
      //   'count':path.resolve(__dirname, './components/chart/count.vue')
      // },
      componentsDir: path.resolve(__dirname, './components'),
    }),
    prismjsPlugin({
      // 配置项
    }),
    ['autometa', autometa_options],
    [
      'sitemap',
      {
        hostname: 'https://rt442979559.github.io/',
        // 排除无实际内容的页面
        exclude: ['/404.html'],
      },
    ],
    ['vuepress-plugin-baidu-autopush'],
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
    viteOptions: {
      ssr: {
        noExternal: ['element-plus'],
      },
    },
    vuePluginOptions: {},
  }),
}
