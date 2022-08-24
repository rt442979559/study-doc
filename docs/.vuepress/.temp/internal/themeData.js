export const themeData = JSON.parse("{\"repo\":\"rt442979559/study-doc\",\"docsRepo\":\"rt442979559/doc\",\"docsDir\":\"docs | study\",\"editLink\":false,\"sidebarDepth\":3,\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"技巧\",\"ariaLabel\":\"skip\",\"children\":[{\"text\":\"图表\",\"link\":\"/skip/echarts/\"},{\"text\":\"方法\",\"link\":\"/skip/methods/\"},{\"text\":\"插件\",\"link\":\"/skip/plugins/\"},{\"text\":\"组件\",\"link\":\"/skip/components/\"}]},{\"text\":\"资源\",\"ariaLabel\":\"resource\",\"children\":[{\"text\":\"工具\",\"link\":\"/resource/utils/\"}]},{\"text\":\"地图\",\"ariaLabel\":\"map\",\"children\":[{\"text\":\"百度\",\"link\":\"/map/bdmap/\"},{\"text\":\"高德\",\"link\":\"/map/gdmap/\"},{\"text\":\"cesium\",\"link\":\"/map/cesium/\"}]}],\"sidebar\":{\"/skip/\":[\"/skip/echarts.md\",\"/skip/methods.md\",\"/skip/plugins.md\",\"/skip/components.md\"],\"/map/\":[\"/map/bdmap.md\",\"/map/gdmap.md\",\"/map/cesium.md\"],\"/resource/\":[\"/resource/utils.md\"]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
