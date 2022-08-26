<template>
  <div>
    <div id="cesiumContainer" />
  </div>
</template>
<script lang="ts" setup async>
import { onMounted, ref } from 'vue'
import { useCesium } from './cesium/useCesium'

const { init, Cesium } = useCesium()

onMounted(async () => {
  await init()
})
</script>

<style lang="scss" scoped></style>
