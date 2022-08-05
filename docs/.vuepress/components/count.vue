<template>
  <div class="chart-box">
    <div ref="chart" class="chart" />
  </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { getEchartOption } from '../json/echartOption.ts'

const chart = ref<HTMLDivElement | null>()
const initEchart = () => {
  const option = getEchartOption('fuwu')
  echarts.init(chart.value as HTMLDivElement).setOption(option)
}

onMounted(() => {
  initEchart()
})

</script>

<style lang='scss' scoped>
.chart-box {
  height:240px;
  .chart {
    height: 100%;
  }
}
</style>
