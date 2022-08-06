import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("chart", defineAsyncComponent(() => import("F:/WorkSpace/press/vuepress-starter/docs/.vuepress/components/chart.vue"))),
      app.component("v-code", defineAsyncComponent(() => import("F:/WorkSpace/press/vuepress-starter/docs/.vuepress/components/v-code.vue")))
  },
}
