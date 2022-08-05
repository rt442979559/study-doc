    import { defineClientConfig } from '@vuepress/client'
    import { defineAsyncComponent } from 'vue'
    export default defineClientConfig({
        enhance({ app }){            
            app.component("button-base", defineAsyncComponent(() => import("F:/WorkSpace/press/vuepress-starter/docs/examples/button/base.vue"))),
            app.component("DemoBlock", defineAsyncComponent(() => import("F:/WorkSpace/press/vuepress-starter/node_modules/vuepress-plugin-demo-block-vue3/src/DemoBlock.vue")))
        },
    })
    