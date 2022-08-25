<template>
  <div>
    <el-space fill wrap>
      <GaodeMap
        v-model:visible="showMap"
        v-model:lonlat="lonlat"
        @getAddress="(val) => (address = val)"
      />
      <p>当前经纬度：{{ lonlat }}</p>
    </el-space>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GaodeMap from './aMapSource/GaodeMap.vue'

const showMap = ref(false)
const lonlat = ref('')
const address = ref('')
</script>

<style lang="scss" scoped></style>
