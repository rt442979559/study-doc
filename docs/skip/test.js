var data = ['2016', '2017', '2018', '2019', '2020']
var data1 = [70.59, 71.39, 72.40, 83.92, 94.23]
var option = {
  backgroundColor: '#08132f',
  /** 区域位置*/
  grid: {
    left: '15%',
    right: '10%',
    top: '15%',
    bottom: '15%'
  },
  xAxis: {
    data: data,
    position: 'bottom',
    type: 'category',
    axisLine: {
      show: true,
      lineStyle: {
        color: '#ECF1F6'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      rotate: 0,
      fontSize: 12,
      color: '#fff'
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#ECF1F6', '#ECF1F6'],
        width: 0,
        type: 'dashed'
      }
    },
    gridIndex: 0
  },
  legend: {
    top: '4%',
    textStyle: {
      color: '#A1D5FF',
      fontSize: 14
    },
    itemGap: 12 // 设置间距
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
      fontSize: '12'
    },
    formatter: params => {
      const rander = params.map(item =>
        `<div>${item.seriesName}: ${item.seriesType !== 'line' ? item.value : item.value + '%'}</div>`).join('')
      return `
            <div>${params[0].axisValue}</div>
            ${rander}
        `
    }
  },
  yAxis: {
    name: '(亿元)',
    nameTextStyle: {
      align: 'left',
      color: '#fff',
      padding: [0, 0, -5, -15],
      fontSize: 12
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      rotate: 0,
      fontSize: 12,
      color: '#fff'
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#ECF1F6', '#ECF1F6'],
        width: 1,
        type: 'dashed'
      }
    }
  },
  series: [{
    name: '产值',
    type: 'pictorialBar',
    barWidth: '20px',
    // 圆柱图片的堆叠
    symbol: 'image://data:image/png;base64,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',
    symbolRotate: '0', // 倾斜度
    symbolMargin: '-5px', // 控制分割图形的大小
    symbolSize: ['100%', 15],
    symbolRepeat: true,
    animation: false,
    itemStyle: {
      barBorderRadius: [10, 10, 0, 0],
      color: '#FFF'
    },
    label: {
      color: '#fff',
      show: false,
      position: ['100%', '45%'],
      fontSize: 16
    },
    data: data1,
    z: 1
  }]
}