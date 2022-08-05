import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("count", defineAsyncComponent(() => import("F:/WorkSpace/press/vuepress-starter/docs/.vuepress/components/count.vue"))),
      app.component("v-code", defineAsyncComponent(() => import("F:/WorkSpace/press/vuepress-starter/docs/.vuepress/components/v-code.vue")))
  },
}
