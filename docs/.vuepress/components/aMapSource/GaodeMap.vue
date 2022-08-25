<template>
  <div class="map">
    <div
      id="container-mini"
      :style="{
        height: mapOption?.height || '200px',
        width: mapOption?.width || '200px',
      }"
    ></div>
    <el-button @click="visible = true">地图选点</el-button>
    <el-dialog
      top="2.5%"
      width="60%"
      v-model="visible"
      :show-close="false"
      custom-class="dialog_style"
      title="地图选点"
      @close="close"
      :destroy-on-close="true"
    >
      <div id="container"></div>
      <div id="pickerBox">
        <input id="pickerInput" placeholder="输入关键字选取地点" />
        <div id="poiInfo"></div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup async>
import {
  ref,
  computed,
  watchEffect,
  onMounted,
  defineProps,
  defineEmits,
} from 'vue'
import { plugin } from './plugin.js'
const props = defineProps(['visible', 'lonlat', 'mapOption'])
const emits = defineEmits(['update:visible', 'update:lonlat', 'getAddress'])
const visible = computed({
  get: () => props.visible,
  set: (val) => emits('update:visible', val),
})
const lonlat = computed({
  get: () => props.lonlat,
  set: (val) => emits('update:lonlat', val),
})
let map: any = null
let AMap: any = null
let lnglat: any = []
let marker: any = null // 地图标记
const AMapUI = (window as any).AMapUI
const geocoder: any = ref('') // 地图编码
const address: any = ref('') // 地址
const mapInit = async () => {
  const res = await plugin()
  AMap = res
  map = new AMap.Map('container', {
    zoom: 18,
    viewMode: '3D',
    center: lonlat.value || [120.5644, 27.6025],
    pitch: 50,
    rotation: 35,
    resizeEnable: true,
  })
  marker = new AMap.Marker() // 初始化点位标记
  map.plugin(
    ['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView', 'AMap.Geocoder'],
    () => {
      map.addControl(new AMap.ToolBar()) // 工具条
      map.addControl(new AMap.Scale()) // 比例尺
      map.addControl(new AMap.OverView()) // 显示鹰眼
      geocoder.value = new AMap.Geocoder({
        // 地理编码
        radius: 1000, // 范围，默认：500
      })
    }
  )
  // 初始化poiPicker
  AMapUI &&
    AMapUI.loadUI(['misc/PoiPicker'], function (PoiPicker) {
      var poiPicker = new PoiPicker({
        input: 'pickerInput',
      })
      poiPickerReady(poiPicker)
    })
  if (lonlat.value && lonlat.value.length > 0) {
    const poi = {
      Q: lonlat.value[1],
      R: lonlat.value[0],
      lng: lonlat.value[0],
      lat: lonlat.value[1],
    }
    setMarker(poi)
    setGeocoder(lonlat.value)
  }
  // *鼠标单击经纬度加载点位详情
  addAmapGeocoder()
}
const poiPickerReady = (poiPicker) => {
  ;(window as any).poiPicker = poiPicker
  //选取了某个POI
  poiPicker.on('poiPicked', function (poiResult) {
    const poi = poiResult.item
    setMarker(poi.location)
    address.value = poi.address || poi.name
    marker.setLabel({
      offset: new AMap.Pixel(1, 0),
      content: address.value,
      direction: 'top',
    })
  })
  poiPicker.onCityReady(function () {
    poiPicker.suggest('美食')
  })
}
const addAmapGeocoder = () => {
  map.on('click', (e) => {
    const poi = {
      Q: e.lnglat.lat,
      R: e.lnglat.lng,
      lng: e.lnglat.lng,
      lat: e.lnglat.lat,
    }
    setMarker(poi)
    setGeocoder(lnglat)
  })
}
// *设置标记
const setMarker = (poi) => {
  map.remove(marker)
  marker.setMap(map)
  marker.setPosition(poi)
  map.setCenter(marker.getPosition())
  lnglat = [poi.lng, poi.lat]
}
// *设置地理编码
const setGeocoder = (lnglat) => {
  geocoder.value.getAddress(lnglat, (status, result) => {
    if (status === 'complete' && result.regeocode) {
      address.value = result.regeocode.formattedAddress
      marker.setLabel({
        offset: new AMap.Pixel(1, 0), //设置文本标注偏移量
        content: address.value,
        direction: 'top', //设置文本标注方位
      })
    }
  })
}
// *初始化小地图
let miniMap: any = null
let miniMarker: any = null
const miniMapInit = async () => {
  const res = await plugin()
  AMap = res
  miniMarker = new AMap.Marker()
  miniMap = new AMap.Map('container-mini', {
    zoom: 18,
    viewMode: '3D',
    center: lonlat.value || [120.5644, 27.6025],
    pitch: 50,
    rotation: 35,
    resizeEnable: true,
  })
  if (lonlat.value && lonlat.value.length > 0) {
    miniMap.remove(miniMarker)
    miniMarker.setMap(miniMap)
    miniMarker.setPosition([lonlat.value[0], lonlat.value[1]])
    miniMap.setCenter(miniMarker.getPosition())
  }
}
watchEffect(() => {
  if (visible.value) {
    mapInit()
  }
  if (lonlat.value) {
    miniMapInit()
  }
})
onMounted(async () => {
  await miniMapInit()
})
const handleConfirm = () => {
  lonlat.value = lnglat
  visible.value = false
  emits('getAddress', address.value)
}
const close = () => {
  map.destroy()
}
</script>
<style lang="scss" scoped>
#container {
  width: 100%;
  height: 500px;
  ::v-deep .amap-logo {
    display: none !important; //去掉高德地图logo
  }
  ::v-deep .amap-copyright {
    opacity: 0; //去掉高德的版本号
  }
}
#container-mini {
  margin-right: 20px;
  ::v-deep .amap-logo {
    display: none !important; //去掉高德地图logo
  }
}
#pickerBox {
  position: absolute;
  z-index: 9999;
  top: 90px;
  right: 30px;
  width: 300px;
  ::v-deep .amap-ui-poi-picker-sugg-container {
    max-height: 300px !important;
  }
}
#pickerInput {
  width: 200px;
  padding: 5px 5px;
}
#poiInfo {
  background: #fff;
}
.amap_lib_placeSearch .poibox.highlight {
  background-color: #cae1ff;
}
.amap_lib_placeSearch .poi-more {
  display: none !important;
}
.map {
  display: flex;
  align-items: center;
}
</style>
