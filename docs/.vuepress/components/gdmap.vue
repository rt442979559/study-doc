<template>
  <div>
    <GaodeMap
      v-model:visible="showMap"
      v-model:lonlat="lonlat"
      @getAddress="(val) => (address = val)"
    />
    
  </div>
</template>

<script setup lang="ts">
import GaodeMap from './childCom/GaodeMap.vue'
</script>

<style lang="scss" scoped></style>
