export const data = JSON.parse("{\"key\":\"v-e0a8de3a\",\"path\":\"/count.html\",\"title\":\"count\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"count\"},\"excerpt\":\"\",\"headers\":[{\"level\":3,\"title\":\"count title\",\"slug\":\"count-title\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"count.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
