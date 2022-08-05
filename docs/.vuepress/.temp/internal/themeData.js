export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"技巧\",\"ariaLabel\":\"skip\",\"children\":[{\"text\":\"图表\",\"link\":\"/skip/echarts/\"},{\"text\":\"方法\",\"link\":\"/skip/methods/\"},{\"text\":\"插件\",\"link\":\"/skip/plugins/\"}]},{\"text\":\"地图\",\"ariaLabel\":\"map\",\"children\":[{\"text\":\"方法\",\"link\":\"/map/demo/\"},{\"text\":\"地图\",\"link\":\"/map/downfile/\"}]}],\"sidebar\":{\"/skip/\":[\"/skip/echarts.md\",\"/skip/methods.md\",\"/skip/plugins.md\"],\"/map/\":[\"/map/downfile.md\",\"/map/demo.md\"]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
