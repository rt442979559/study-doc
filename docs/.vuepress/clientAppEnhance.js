import * as Icons from '@element-plus/icons-vue'
import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

export default defineClientAppEnhance(({ app }) => {
  app.use(ElementPlus)
  // icon
  for (const icon in Icons) {
    // eslint-disable-next-line import/namespace
    app.component('ElIcon' + icon, Icons[icon])
  }

  console.log(app,'app');
  if (app.env.isDev && app.options.bundler.endsWith('vite')) {
    // eslint-disable-next-line import/no-extraneous-dependencies
    app.options.bundlerConfig.viteOptions = require('vite').mergeConfig(
      app.options.bundlerConfig.viteOptions,
      {
        optimizeDeps: {
          include: ['lodash'],
        },
      }
    )
  }
})