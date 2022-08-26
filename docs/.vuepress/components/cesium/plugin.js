/* eslint-disable no-undef */
export function injectCesium(ak) {
  return new Promise((resolve, reject) => {
    let load = false
    // 如果已加载直接返回
    if (typeof Cesium !== 'undefined') {
      resolve(Cesium)
      return true
    }
    // 地图异步加载回调处理
    window.onload = () => {
      load = true
      resolve(Cesium)
    }

    // 注入script脚本
    const script = document.createElement('script')
    script.src = `https://cesium.com/downloads/cesiumjs/releases/1.82/Build/Cesium/Cesium.js`
    const css = document.createElement('link')
    css.href = `https://cesium.com/downloads/cesiumjs/releases/1.82/Build/Cesium/Widgets/widgets.css`
    css.rel = 'stylesheet'
    document.body.appendChild(script)
    document.head.appendChild(css)

    setTimeout(() => {
      if (Cesium) {
        resolve(Cesium)
      }
    }, 100)
  })
}
