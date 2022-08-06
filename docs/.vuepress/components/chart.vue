<template>
  <div class="chart-box">
    <div ref="chart" class="chart" />
  </div>
</template>

<script setup lang='ts'>
import { CaretBottom } from '@element-plus/icons-vue' // svg图标
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import * as chartOption from '../json/chart/index.ts'

const props = defineProps({
  quote: {
    type: String,
    default: ''
  },
})

const chart = ref<HTMLDivElement | null>()
const initEchart = () => {
  const option = chartOption[props.quote]()
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
