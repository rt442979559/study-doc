import * as echarts from 'echarts'

// *百分比饼图 - 1
export const pie = () => {
  const imgSrc =
    'data:image/png;base64,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'
  const option = {
    backgroundColor: '#08132f',
    color: ['#fa4a4a', '#fec501', '#07f1bb', '#FDB408', '#00DB1C', '#0188FE'],
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        const { name, value } = params.data
        return `${name}: ${params.percent}%`
      },
    },
    graphic: {
      elements: [
        {
          type: 'image',
          z: 3,
          style: {
            image: imgSrc,
            width: 45,
            height: 45,
          },
          left: 'center',
          top: '40%',
          position: [100, 100],
        },
      ],
    },
    title: {
      show: false,
    },
    legend: {
      align: 'right',
      top: 5,
      right: 0,
      itemWidth: 14,
      itemHeight: 13,
      data: [{ name: '一级' }, { name: '二级' }, { name: '三级' }],
      textStyle: {
        color: 'white',
      },
    },
    toolbox: {
      show: false,
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: [55, 60],
        center: ['50%', '50%'],
        itemStyle: {
          color: 'rgba(8,56,92,0.4)',
        },
        hoverAnimation: false,
        data: [100],
      },
      {
        name: '',
        type: 'pie',
        radius: [60, 70],
        center: ['50%', '50%'],
        clockwise: false,
        label: {
          show: true,
          position: 'outside',
          formatter: '{a|{b}：' + '\n\n{d}%}\n',
          textBorderWidth: 0,
          rich: {
            a: {
              padding: [0, 15, 0, 15],
              color: '#fff',
            },
          },
        },
        itemStyle: {
          borderWidth: 5, // 设置border的宽度有多大
          borderColor: '#01143a',
        },
        hoverAnimation: false,
        hoverOffset: 5,
        data: [
          {
            name: 'Apples',
            value: 70,
          },
          {
            name: 'Strawberries',
            value: 68,
          },
          {
            name: 'Bananas',
            value: 48,
          },
        ],
      },
      {
        name: '',
        type: 'pie',
        radius: [0, 40],
        center: ['50%', '50%'],
        label: {
          show: false,
        },
        itemStyle: {
          color: 'rgba(8,56,92,0.3)',
        },
        hoverAnimation: false,
        data: [100],
      },
    ],
  }
  return option
}

// *嵌套饼图 - 2
export const pie2 = () => {
  const colorList = [
    '#ffb400',
    '#2483ff',
    '#19b1fb',
    '#00fcff',
    '#DD9222',
    '#3bac7b',
  ]
  let option = {
    backgroundColor: '#08132f',
    color: colorList,
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      x: '20%',
      y: 'center',
      textStyle: {
        color: '#A1D5FF',
        fontSize: 14,
      },
      data: [
        '直达',
        '营销广告',
        '搜索引擎',
        '邮件营销',
        '联盟广告',
        '视频广告',
        '百度',
        '谷歌',
        '必应',
        '其他',
      ],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
          position: 'inner',
          itemStyle: {
            color: 'rgba(8,56,92,0.3)',
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          { value: 335, name: '直达', selected: true },
          { value: 679, name: '营销广告' },
          { value: 1548, name: '搜索引擎' },
        ],
      },
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '55%'],
        label: {
          itemStyle: {
            color: 'rgba(8,56,92,0.3)',
          },
        },
        data: [
          { value: 335, name: '直达' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1048, name: '百度' },
          { value: 251, name: '谷歌' },
          { value: 147, name: '必应' },
          { value: 102, name: '其他' },
        ],
      },
    ],
  }
  return option
}

// *仪表盘 - 3
export const pie3 = () => {
  let title = ['电子锁缺失', '未施封', '异常停车', '违规停车', '异常报警']
  const total = 500
  let dataValue = [100, 200, 300, 400, 500]
  let dataList = title.map((item, index) => {
    return {
      name: item,
      value: dataValue[index],
    }
  })
  const colorList = [
    '#ffb400',
    '#2483ff',
    '#19b1fb',
    '#00fcff',
    '#DD9222',
    '#3bac7b',
  ]
  const option = {
    color: colorList,
    backgroundColor: '#08132f',
    title: [
      {
        text: total,
        x: '50%',
        y: '38%',
        textAlign: 'center',
        textStyle: {
          fontSize: '20',
          fontWeight: '500',
          color: '#fff',
          textAlign: 'center',
        },
      },
      {
        text: '累计任务',
        left: '50%',
        top: '50%',
        textAlign: 'center',
        textStyle: {
          fontSize: '14',
          color: '#f0f2f5',
          textAlign: 'center',
        },
      },
    ],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        const { name, value } = params.data
        return `${name}: ${value}`
      },
    },
    series: [
      {
        type: 'gauge',
        radius: '70%',
        clockwise: false,
        startAngle: 90,
        endAngle: -269.9999,
        splitNumber: 100,
        center: ['50%', '50%'],
        detail: {
          offsetCenter: [10, 0],
          formatter: ' ',
        },
        pointer: {
          show: false,
        },
        itemStyle: {
          normal: {
            shadowBlur: 50,
            shadowColor: 'rgba(7, 132, 250, 0.8)',
            borderWidth: 5,
            borderColor: '#4697d6',
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            width: 0,
            shadowBlur: 0,
            color: [[1, '#0dc2fe']],
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          length: 5,
          lineStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 255, 255, 0)',
            shadowOffsetY: '0',
            color: '#06adfc',
            width: 1,
          },
        },
        axisLabel: {
          show: false,
        },
      },
      {
        type: 'gauge',
        radius: '45%',
        clockwise: false,
        startAngle: 90,
        endAngle: -269.9999,
        splitNumber: 20,
        center: ['50%', '50%'],
        detail: {
          offsetCenter: [10, 0],
          formatter: ' ',
        },
        pointer: {
          show: false,
        },
        itemStyle: {
          normal: {
            shadowBlur: 50,
            shadowColor: 'rgba(7, 132, 250, 0.8)',
            borderWidth: 5,
            borderColor: '#4697d6',
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            width: 0,
            shadowBlur: 0,
            color: [[1, '#0dc2fe']],
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          length: 7,
          lineStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 255, 255, 0)',
            shadowOffsetY: '0',
            color: '#06adfc',
            width: 1,
          },
        },
        axisLabel: {
          show: false,
        },
      },
      {
        // name: '', // 外层光晕
        type: 'pie',
        startAngle: 90,
        radius: ['44%', '45%'],
        center: ['50%', '50%'],
        hoverAnimation: false,
        itemStyle: {
          labelLine: {
            show: false,
          },
          color: 'rgba(66, 66, 66, .3)',
          shadowBlur: 5,
          shadowColor: 'rgba(6,173,252, .2)',
        },
        data: [
          {
            value: 100,
          },
        ],
      },
      {
        name: 'haha',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '50%'],
        label: {
          show: true,
          position: 'outside',
          formatter: '{a|{b}:{d}%}\n',
          textBorderWidth: 0,
          rich: {
            a: {
              padding: [0, 15, 0, 15],
              color: '#fff',
            },
          },
        },
        itemStyle: {
          borderWidth: 2, // 描边线宽
          borderColor: '#03122f',
        },
        hoverAnimation: false,
        hoverOffset: 5,
        data: dataList,
      },
    ],
  }
  return option
}

// *雷达图 -4
export const pie4 = () => {
  const indicator = [
    {
      text: '文明村',
      min: 0,
      max: 100,
    },
    {
      text: '卫生村',
      min: 0,
      max: 100,
    },
    {
      text: '森林村庄',
      min: 0,
      max: 100,
    },
    {
      text: '全面小康',
      min: 0,
      max: 100,
    },
    {
      text: '景区村庄',
      min: 0,
      max: 100,
    },
  ]
  const Data = [80, 61, 70, 86, 77]
  const colorList = [
    '#ffb400',
    '#2483ff',
    '#19b1fb',
    '#00fcff',
    '#DD9222',
    '#3bac7b',
  ]

  function setData() {
    return [
      {
        value: Data,
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#4BFFFC',
              shadowColor: '#4BFFFC',
              shadowBlur: 5,
            },
            shadowColor: '#4BFFFC',
            shadowBlur: 5,
          },
        },
        areaStyle: {
          normal: {
            // 单项区域填充样式
            color: {
              type: 'radial',
              x: 0.5, //右
              y: 0.5, //下
              r: 1,
              colorStops: [
                {
                  offset: 1,
                  color: '#4BFFFC',
                },
                {
                  offset: 0,
                  color: 'rgba(0,0,0,0)',
                },
              ],
              globalCoord: false,
            },
            opacity: 0.8, // 区域透明度
          },
        },
      },
    ]
  }

  // 刻度尺
  function setgauge(i) {
    return {
      type: 'gauge',
      detail: false,
      splitNumber: 10, //刻度数量
      radius: '80%', //图表尺寸
      center: ['50%', '50%'],
      startAngle: 90 + 72 * i + 18, //开始刻度的角度
      endAngle: 90 + 72 * (i + 1) - 18, //结束刻度的角度
      axisLine: {
        show: false,
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#66ccff',
          width: 1,
        },
        length: 6,
        splitNumber: 1,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    }
  }
  function setSpot() {
    let scatterData = []
    Data.map((o, i) => {
      scatterData.push({
        value: [o, i],
        itemStyle: {
          normal: {
            color: colorList[i],
            borderColor: '#fff',
            borderWidth: 1,
            shadowColor: colorList[i],
            shadowBlur: 8,
          },
        },
      })
    })
    return scatterData
  }

  const option = {
    color: colorList,
    backgroundColor: '#08132f',
    polar: {
      center: ['50%', '50%'],
      radius: '60%',
    },
    radar: {
      shape: 'circle',
      center: ['50%', '50%'],
      radius: '60%',
      indicator: indicator,
      axisName: {
        color: '#b7e9fd',
        fontSize: 24,
        padding: -10,
      },
      nameGap: 45,
      splitNumber: 4,
      splitArea: {
        // 坐标轴在 grid 区域中的分隔区域，默认不显示。
        show: true,
        areaStyle: {
          // 分隔区域的样式设置。
          color: ['rgba(27, 50, 66, 0.4)'],
        },
      },
      axisLine: {
        //指向外圈文本的分隔线样式
        lineStyle: {
          color: '#5aa3d0',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(99,192,251,0.2)', // 分隔线颜色
          width: 2, // 分隔线线宽
        },
      },
    },
    angleAxis: {
      type: 'category',
      data: name,
      minInterval: 1,
      boundaryGap: false,
      clockwise: false,
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    radiusAxis: {
      min: 0,
      max: 100,
      interval: 25,
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        //指向外圈文本的分隔线样式
        lineStyle: {
          color: '#5aa3d0',
        },
      },
      axisLabel: {
        fontSize: 12,
        color: '#5aa3d0',
        align: 'left',
        margin: -5,
      },
    },
    series: [
      setgauge(0),
      setgauge(1),
      setgauge(2),
      setgauge(3),
      setgauge(4),
      {
        type: 'radar',
        silent: true,
        lineStyle: {
          color: '#66ffff',
        },
        areaStyle: {
          color: 'rgba(102, 255, 255, 0.31)',
        },
        data: setData(),
      },
      {
        type: 'scatter',
        coordinateSystem: 'polar',
        symbolSize: 20,
        data: setSpot(),
      },
    ],
  }
  return option
}

// *渐变雷达图 -5
export const pie5 = () => {
  const colorList = [
    '#ffb400',
    '#2483ff',
    '#19b1fb',
    '#00fcff',
    '#DD9222',
    '#3bac7b',
  ]
  let list = [
    [1, 2, 3, 1, 2, 3, 3],
    3,
    [
      {
        name: '工程质量',
        max: 3,
        color: '#F84C0B',
      },
      {
        name: '运行管理',
        max: 3,
        color: '#00CF75',
      },
      {
        name: '防洪能力复核',
        max: 3,
        color: '#0099FF',
      },
      {
        name: '结构安全',
        max: 3,
        color: '#0099FF',
      },
      {
        name: '渗流安全',
        max: 3,
        color: '#0099FF',
      },
      {
        name: '抗震安全',
        max: 3,
        color: '#0099FF',
      },
      {
        name: '金属结构安全',
        max: 3,
        color: '#0099FF',
      },
    ],
  ]
  let seriesData = list[0]
  let radarData = list[2]

  let option = {
    backgroundColor: '#08132f',
    color: colorList,
    title: {
      text: '基础雷达图',
    },

    radar: {
      indicator: radarData,
      center: ['50%', '50%'],
      shape: 'polygon',
      radius: '60%',
      nameGap: 20,
      splitNumber: 3,
      axisLine: {
        lineStyle: {
          color: '#447AB5',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#447AB5',
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(68,122,181,0.7)', 'rgba(68,122,181,0.7)'],
        },
      },
      axisLabel: {
        fontSize: 0,
      },
    },
    series: [
      {
        type: 'radar',
        symbolSize: 1,
        lineStyle: {
          color: '#0018ff',
          type: 'solid',
          width: 0,
        },
        data: [
          {
            value: seriesData,
            label: {
              show: true,
            },
            areaStyle: {
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.66,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F84C0B', // 0% 处的颜色
                  },
                  {
                    offset: 0.66,
                    color: '#00CF75', // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#0099FF', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        ],
      },
    ],
  }
  return option
}
