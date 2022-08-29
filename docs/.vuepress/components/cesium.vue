<template>
  <div>
    <div id="cesiumContainer" />
  </div>
</template>
<script lang="ts" setup async>
import { onMounted, nextTick } from 'vue'
import { useCesium } from './cesium/useCesium'

const { init } = useCesium()

onMounted(async () => {
  await nextTick()
  await init()
})
</script>

<style lang="scss" scoped></style>
