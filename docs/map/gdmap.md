# 高德地图

## 引入 :ringed_planet:

```vue
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
```

<v-code componentName="aMap" >

@[code{1-243} vue](@docs/.vuepress/components/aMapSource/GaodeMap.vue)

<br />
<br />

@[code{1-43} js](@docs/.vuepress/components/aMapSource/plugin.js)

</v-code>
