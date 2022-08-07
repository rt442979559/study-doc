import * as echarts from 'echarts'

// *标点折线图 - 1
export const punctuation = () => {
  let seriesData = [15, 18, 24, 28, 32]
  let data = ['01-02月', '01-03月', '01-04月', '01-05月', '01-06月']
  let value = [40, 80, 60, 20, 30, 40, 80]
  let option = {
    backgroundColor: '#08132f',
    grid: {
      left: '10%',
      right: 0,
      top: '15%',
      bottom: '15%',
    },
    xAxis: {
      data: data,
      position: 'bottom',
      type: 'category',
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'gray',
          opacity: 1,
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        rotate: 0,
        fontSize: 12,
        color: '#fff',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#ECF1F6', '#ECF1F6'],
          width: 0,
          type: 'dashed',
        },
      },
      gridIndex: 0,
    },
    legend: {
      top: '4%',
      itemHeight: 9,
      itemWidth: 9,
      textStyle: {
        color: '#A1D5FF',
        fontSize: 12,
      },
      data: [
        {
          name: '累计增速',
          // 强制设置图形为圆。
          icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAqklEQVQ4jWNk+L9lCQMDgxEDdcA5Fqhh2VQycCoTlQyCgxFoIAsBeRkGBoZUBgYGYyj/LAMDw2wGBoYn5BgoC4o1BgYGHiQxWwYGBkNoqniMTRM+L6egGQYDPFA5rACfgcZ45EzIMZAsgM/As3jkzpDjwrkMDAxfsIh/gcqRbOAjaGweZmBg+AbFh6Fij3BpIpQOQUmjnoAaol1IFhihhcM5aJ6lHDAwnAMAagkZ1p1ZuI4AAAAASUVORK5CYII=',
          // 设置文本为红色
          textStyle: {
            color: 'white',
          },
        },
      ],
      itemGap: 12, // 设置间距
    },
    tooltip: {
      trigger: 'axis',
      textStyle: { fontSize: '12' },
      formatter: (params) => {
        const rander = params
          .map(
            (item) =>
              `<div>${item.seriesName}: ${
                item.seriesType !== 'line' ? item.value : item.value + '%'
              }</div>`
          )
          .join('')
        return `
              <div>${params[0].axisValue}</div>
              ${rander}
          `
      },
    },
    yAxis: [
      {
        name: '(%)',
        nameTextStyle: {
          align: 'left',
          color: '#fff',
          padding: [0, 0, 0, -35],
          fontSize: 12,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          rotate: 0,
          fontSize: 12,
          color: '#fff',
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255,255,255,0.3)',
          },
        },
      },
    ],
    series: [
      {
        name: '累计增速',
        type: 'line',
        label: {
          show: false,
        },
        data: seriesData,
        lineStyle: {
          width: 3,
          color: '#00ffb4', // 线条颜色
          borderColor: '#00ffb4',
        },
        symbol:
          'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAqklEQVQ4jWNk+L9lCQMDgxEDdcA5Fqhh2VQycCoTlQyCgxFoIAsBeRkGBoZUBgYGYyj/LAMDw2wGBoYn5BgoC4o1BgYGHiQxWwYGBkNoqniMTRM+L6egGQYDPFA5rACfgcZ45EzIMZAsgM/As3jkzpDjwrkMDAxfsIh/gcqRbOAjaGweZmBg+AbFh6Fij3BpIpQOQUmjnoAaol1IFhihhcM5aJ6lHDAwnAMAagkZ1p1ZuI4AAAAASUVORK5CYII=',
        symbolSize: '20',
        areaStyle: {
          // 区域填充样式
          // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#046a5f',
              },
              {
                offset: 0.8,
                color: '#073a45',
              },
              {
                offset: 1,
                color: '#081b34',
              },
            ],
            false
          ),
        },
      },
    ],
  }
  return option
}

// *象形折线图 - 2
export const punctuation2 = () => {
  const seriesData = [10000, 12000, 16000, 18000, 30000]
  var data = ['01-02月', '01-03月', '01-04月', '01-05月', '01-06月']
  var value = [40, 80, 60, 20, 30, 40, 80]
  var arr = new Array(value.length).fill(100)
  var option = {
    backgroundColor: '#08132f',
    grid: {
      left: '10%',
      right: '10%',
      top: '18%',
      bottom: '10%',
    },
    xAxis: {
      data: data,
      position: 'bottom',
      type: 'category',
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'gray',
          opacity: 1,
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        rotate: 0,
        fontSize: 12,
        color: '#fff',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#ECF1F6', '#ECF1F6'],
          width: 0,
          type: 'dashed',
        },
      },
      gridIndex: 0,
    },
    legend: {
      top: '0%',
      textStyle: {
        color: '#A1D5FF',
        fontSize: 12,
      },
      data: [
        {
          name: '累计总额',

          // 设置文本为红色
          textStyle: {
            color: 'white',
          },
        },
        {
          name: '同比增长',
          icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACFUlEQVQ4jZWVQUtUcRTFf/OaGXUKpybKoDZtMnBjS8HK4BFt7CsYhEXYRuhjhO3S8FvoMhdKSktblqErCyTUGUkTp3pypvPiP/FvsguXN/DuPXPvufeeV8heE7MiMGwfAM4BTWAH+Ags27+TZm3pMcCbwGOgB9gF9oEjvysDZ4CzwDfgFWn25m+ACTAO3Ac2ga0AsOmYEnDaFfcBV4A5YJY0+4lby01g94C1ALDuSkLAHgM2gAPn0Ko2ALwNjJqfDeAT8AXYAw5bXP0yxXcbLKcia+UuFN6TZktFB00YZNPPz8A2MOTKbxhwtdUevA2qLpuGpywUVgQ2Apxyi1uuTGBPgMk/BpZP/gUwbQoqQBU4D9xJHLDrlai7naEIWGiTjmk4Z8cYwwK8Dnw1wQfmbLwDWDjEQ+fs2/sF2Gs+jvzUAAZPADjo2GaQX00Ccv/XCrH4xKtR8rRKnvq7E4CvOrYU5DcEuO5zqti7vRr/slnHVrw28g+Jj1ybX/ONVr1nUx0ApxxTdU7NGMsCXAR++DblFxwwAzzwH+YboN9jfldz7EW7Lmax6Em9BJ5FlEU8PYyc3iWDXbZAyJ+TZs38llVlf3DoZXNTd2WhOFTcZp8BrwLzpJkw2tRGJHcBd4Nz0gXE5Evtqk1VJgH8PcSYwN4CHrm1mMDmeqgrkQ4uhcmdPgESDan3NbcoEwXSS6m0Wmz/BADH3vueoqig/N4AAAAASUVORK5CYII=',
          textStyle: {
            color: 'white',
          },
        },
      ],
      itemGap: 12, // 设置间距
    },
    tooltip: {
      trigger: 'axis',
      textStyle: { fontSize: '12' },
      formatter: (params) => {
        const rander = params
          .map(
            (item) =>
              `<div>${item.seriesName}: ${
                item.seriesType !== 'line' ? item.value : item.value + '%'
              }</div>`
          )
          .join('')
        return `
              <div>${params[0].axisValue}</div>
              ${rander}
          `
      },
    },
    yAxis: [
      {
        name: '(千万)',
        nameTextStyle: {
          align: 'left',
          color: '#fff',
          padding: [0, 0, 0, -50],
          fontSize: 12,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          rotate: 0,
          fontSize: 12,
          color: '#fff',
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255,255,255,0.3)',
          },
        },
      },
      {
        nameTextStyle: {
          align: 'left',
          color: '#fff',
          padding: [0, 0, 0, 0],
          fontSize: 12,
        },
        show: true,
        name: '{%}',
        splitLine: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
      },
    ],
    series: [
      {
        // 辅助分割图形
        name: '累计总额',
        type: 'pictorialBar',
        barWidth: '20px',
        symbol:
          'image://data:image/png;base64,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',
        symbolRotate: '0', // 倾斜度
        symbolMargin: '-5px', // 控制分割图形的大小
        symbolSize: ['100%', 20],
        symbolRepeat: true,
        animation: false,
        itemStyle: {
          barBorderRadius: [10, 10, 0, 0],
          color: '#FFF',
        },
        label: {
          color: '#fff',
          show: false,
          position: ['100%', '45%'],
          fontSize: 22,
        },
        data: seriesData,
        z: 1,
      },
      {
        name: '同比增长',
        type: 'line',
        yAxisIndex: 1,
        label: {
          show: false,
        },
        data: [15, 14, 24, 23, 32],
        lineStyle: {
          width: 2,
          color: '#ffbb00', // 线条颜色
          borderColor: '#00ffb4',
        },
        symbol:
          'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACFUlEQVQ4jZWVQUtUcRTFf/OaGXUKpybKoDZtMnBjS8HK4BFt7CsYhEXYRuhjhO3S8FvoMhdKSktblqErCyTUGUkTp3pypvPiP/FvsguXN/DuPXPvufeeV8heE7MiMGwfAM4BTWAH+Ags27+TZm3pMcCbwGOgB9gF9oEjvysDZ4CzwDfgFWn25m+ACTAO3Ac2ga0AsOmYEnDaFfcBV4A5YJY0+4lby01g94C1ALDuSkLAHgM2gAPn0Ko2ALwNjJqfDeAT8AXYAw5bXP0yxXcbLKcia+UuFN6TZktFB00YZNPPz8A2MOTKbxhwtdUevA2qLpuGpywUVgQ2Apxyi1uuTGBPgMk/BpZP/gUwbQoqQBU4D9xJHLDrlai7naEIWGiTjmk4Z8cYwwK8Dnw1wQfmbLwDWDjEQ+fs2/sF2Gs+jvzUAAZPADjo2GaQX00Ccv/XCrH4xKtR8rRKnvq7E4CvOrYU5DcEuO5zqti7vRr/slnHVrw28g+Jj1ybX/ONVr1nUx0ApxxTdU7NGMsCXAR++DblFxwwAzzwH+YboN9jfldz7EW7Lmax6Em9BJ5FlEU8PYyc3iWDXbZAyJ+TZs38llVlf3DoZXNTd2WhOFTcZp8BrwLzpJkw2tRGJHcBd4Nz0gXE5Evtqk1VJgH8PcSYwN4CHrm1mMDmeqgrkQ4uhcmdPgESDan3NbcoEwXSS6m0Wmz/BADH3vueoqig/N4AAAAASUVORK5CYII=',
        symbolSize: '10',
        areaStyle: {
          // 区域填充样式
          // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(255,187,0,.8)',
              },
              {
                offset: 1,
                color: 'rgba(25,163,223, 0)',
              },
            ],
            false
          ),
        },
      },
    ],
  }
  return option
}

// *时间轴折线图 - 3
export const punctuation3 = () => {
  var xData = (function () {
    var data = []
    for (var i = 1; i < 31; i++) {
      data.push(i + '日')
    }
    return data
  })()
  const option = {
    backgroundColor: '#08132f',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        textStyle: {
          color: '#fff',
        },
      },
    },
    grid: {
      borderWidth: 0,
      top: '20%',
      bottom: '10%',
      textStyle: {
        color: '#fff',
      },
    },
    legend: {
      x: '40%',
      top: '5%',
      textStyle: {
        color: '#90979c',
      },
      data: ['访问量', '订单量'],
    },

    calculable: true,
    xAxis: [
      {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: 'rgba(204,187,225,0.5)',
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: xData,
      },
    ],

    yAxis: [
      {
        type: 'value',
        // splitNumber:4,
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(204,187,225,0.5)',
          },
        },
      },
    ],
    dataZoom: [
      {
        show: true,
        height: 30,
        xAxisIndex: [0],
        bottom: 30,

        start: 10,
        end: 80,
        handleIcon:
          'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
          color: '#5B3AAE',
        },
        textStyle: {
          color: 'rgba(204,187,225,0.5)',
        },
        fillerColor: 'rgba(67,55,160,0.4)',
        borderColor: 'rgba(204,187,225,0.5)',
      },
      {
        type: 'inside',
        show: true,
        height: 15,
        start: 1,
        end: 35,
      },
    ],
    series: [
      {
        name: '访问量',
        type: 'line',
        symbolSize: 10,
        symbol: 'circle',
        itemStyle: {
          color: '#6f7de3',
        },
        markPoint: {
          label: {
            normal: {
              textStyle: {
                color: '#fff',
              },
            },
          },
          data: [
            {
              type: 'max',
              name: '最大值',
            },
            {
              type: 'min',
              name: '最小值',
            },
          ],
        },
        data: [
          509, 917, 2455, 2610, 2719, 3033, 3044, 3085, 2708, 2809, 2117, 2000,
          1455, 1210, 719, 733, 944, 2285, 2208, 3372, 3936, 3693, 2962, 2810,
          3519, 2455, 2610, 2719, 2484, 2078,
        ],
      },
      {
        name: '订单量',
        type: 'line',
        symbolSize: 10,
        symbol: 'circle',
        itemStyle: {
          color: '#c257F6',
        },
        markPoint: {
          label: {
            normal: {
              textStyle: {
                color: '#fff',
              },
            },
          },
          data: [
            {
              type: 'max',
              name: '最大值',
            },
            {
              type: 'min',
              name: '最小值',
            },
          ],
        },
        data: [
          2136, 3693, 2962, 3810, 3519, 3484, 3915, 3823, 3455, 4310, 4019,
          3433, 3544, 3885, 4208, 3372, 3484, 3915, 3748, 3675, 4009, 4433,
          3544, 3285, 4208, 3372, 3484, 3915, 3823, 4265, 4298,
        ],
      },
    ],
  }
  return option
}

// *极值折线图 - 4
export const punctuation4 = () => {
  const option = {
    backgroundColor: '#08132f',
    title: {
      text: '未来一周气温变化',
      textStyle: {
        color: '#fff',
      },
    },
    grid: {
      top: '30%',
      bottom: '10%',
      textStyle: {
        color: '#fff',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['最高气温', '最低气温'],
      textStyle: {
        color: '#A1D5FF',
        fontSize: 14,
      },
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {},
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLabel: {
        show: true,
        rotate: 0,
        fontSize: 12,
        color: '#fff',
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255,255,255,0.3)',
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        rotate: 0,
        fontSize: 12,
        color: '#fff',
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255,255,255,0.3)',
        },
      },
    },
    series: [
      {
        name: '最高气温',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10],
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' },
          ],
        },
        markLine: {
          data: [{ type: 'average', name: '平均值' }],
        },
      },
      {
        name: '最低气温',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }],
        },
        markLine: {
          data: [{ type: 'average', name: '平均值' }],
        },
      },
    ],
  }
  return option
}
