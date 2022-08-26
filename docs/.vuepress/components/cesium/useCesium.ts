import { ref, nextTick } from 'vue'
import { injectCesium } from './plugin'

let Cesium: any = null
let viewer: any = null
const tiandituTk = `83726763f175b074574beda5bf660af3`
const defaultAccessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxYTlmZmNkZC02ZGUzLTQxZWYtOTA2NS0zNGZjNDIxZjFkMmEiLCJpZCI6OTcwMTEsImlhdCI6MTY1NDgyODA2Nn0.tqHwkNdHYHRICPFPbvn0KQyivf0v_cD7r6yRZykLVio`

export const useCesium = () => {
  // *初始化 Cesium
  const init = async () => {
    const data = await injectCesium()
    Cesium = data
    Cesium.Ion.defaultAccessToken = defaultAccessToken

    option()
    handle()
  }

  // *基本配置项
  const option = () => {
    viewer = new Cesium.Viewer('cesiumContainer', {
      animation: false,
      homeButton: false, // home键
      geocoder: false, // 地址编码
      baseLayerPicker: false, // 图层选择控件
      timeline: false, // 时间轴
      fullscreenButton: false, // 全屏显示
      infoBox: false, // 点击要素之后浮窗
      sceneModePicker: false, // 投影方式  三维/二维
      navigationInstructionsInitiallyVisible: false, // 导航指令
      navigationHelpButton: false, // 帮助信息
      selectionIndicator: false, // 选择
      shadows: true,
      scene3DOnly: true,
      shouldAnimate: true,
      clockViewModel: new Cesium.ClockViewModel(clock()),
    })
    viewer.scene.globe.enableLighting = true // 启用照明
    viewer.cesiumWidget.creditContainer.style.display = 'none' // 隐藏cesium ion
  }

  // *时间轴变化
  const clock = () =>
    new Cesium.Clock({
      startTime: Cesium.JulianDate.now(),
      currentTime: Cesium.JulianDate.now(),
      stopTime: Cesium.JulianDate.addDays(
        Cesium.JulianDate.now(),
        1,
        new Cesium.JulianDate()
      ),
      clockRange: Cesium.ClockRange.LOOP_STOP,
      clockStep: Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER,
      multiplier: 3000,
      shouldAnimate: true,
    })

  // *点击事件
  const handle = () => {
    const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
    handler.setInputAction((e: any) => {
      console.log(e)
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
  }

  return {
    init,
    Cesium,
  }
}
