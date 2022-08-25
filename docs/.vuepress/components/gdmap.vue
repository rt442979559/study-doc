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
import { ref } from 'vue'
import GaodeMap from './childCom/GaodeMap.vue'

const showMap = ref(false)
const lonlat = ref('')
const address = ref('')
</script>

<style lang="scss" scoped></style>
