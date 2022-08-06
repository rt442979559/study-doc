import * as echarts from 'echarts'

// *象形图 - 1
export const pictogram = () => {
  let data = ['2016', '2017', '2018', '2019', '2020']
  let data1 = [70.59, 71.39, 72.4, 83.92, 94.23]
  let option = {
    backgroundColor: '#08132f',
    /** 区域位置*/
    grid: {
      left: '15%',
      right: '10%',
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
          color: '#ECF1F6',
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
      textStyle: {
        color: '#A1D5FF',
        fontSize: 14,
      },
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
    yAxis: {
      name: '(亿元)',
      nameTextStyle: {
        align: 'left',
        color: '#fff',
        padding: [0, 0, -5, -15],
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
          color: ['#ECF1F6', '#ECF1F6'],
          width: 1,
          type: 'dashed',
        },
      },
    },
    series: [
      {
        name: '产值',
        type: 'pictorialBar',
        barWidth: '20px',
        // 圆柱图片的堆叠
        symbol:
          'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAWCAYAAACyjt6wAAAGM0lEQVRIib1Xa4hcZxl+vss5Z85t7ruzlzYb0sTctm3oStH6IyAGghJQIqW0lWiEatVC/yniH/WHFO0vRfCPf0RoadUKUhDFNC6Fkot1bZpCLtskuzvZyczsZGbOfc45n5wznWmymd1OQHyZ4TvnvXzf8z3f+573HIIx5YUzonC9jePdAEf8CA8FESpeiIIfQYli0F4MGov+XJRASBSCEkQKg6twtGSGqkRxWWF4U5fwxp+PEH+clbcE+IN3hfRBE89tuDhx28PBlgetF9/hIARYHEGOI1CRoEuMIv2BEMSUIiYEAeGIGEt1A+EUyClomzLe1ST85tSXyCtjAzyxKPaudPDrqoXDLQ9soGdRCDXwEDk+7G6AjhWOS34qhs5hZmVwVYYrZxBy6WObDH9Cw5sSxfOLx0htJMAXzwrzQh1/uNLCEXewthAwHAv2hoNWO7gvQJ8kOVOCWdbgZAzEjKbeEkM8reM1u4evXXyS9IYATyyKhaVb+OdNC9pgXt2x0Fhtww/isRednpBx+HMF5AscrY0Qp99uYb2x/cY4J6jMZmEb2SFd+QxaOQWfPvNlskyef0fsXFzBpbqDPucCUBpN1GrOfTGSpNgzx6dQKvWnsawIr/6xBsuNxoovFRXE02UI0mdTl+BkOHbSyxt4fQguMXTbY4HLmxxPLOSwe4eaVC0O7tGH4Fwvxp/+Ur8HnK6yNI6MKM3mhg+l2Rre2z1ojOJ1Mv+aiOoO6MDgXlrb9lj3P6Qjn+O4et1F1mB45KCBYlEClwgUmSIp5n+8tZHOUcxLKOQ5CgUJhaIEWeojS2y/e2Ud9gh2CwdmIGi/NiWGkMfi7koOQ7Etc9fWXMzrBr54pATHiVGr+ahUZMhyf4+UAl/4fBGeF6PbDVOfZrOHlVUvvbadCLVGMBJcIiwWCD+iK4rB+AR3202o+YHDxKSK9fWtjzg5vuUbLmZmFOycy2B6Wh7abqx4uHTZwf59OnJZjqvLLv590Rq70LKmhJDz4f2kHLQ5e2dJ1g99Rti9PpN+sYCs1UPH6m05UUahafW12yHanRBXrrrQNYoD+w3s26tj6T0LjY0AE0V5606wSWSJIjNbxKDmk2407zQ1svDsKS+Y2cXtQzuI3evnYtIV5I3WtkyOkiT5ZytKalldH6uTpVLIy2DTJYSszx6jEIfFqh3cnjVSzfvnZVapVjF3rGhf9zJ60qa8cgmVnAm0OqjXXcTbp2YqQtwfsGJeRqZswsloGPSGshJ2Hu00VNeZNZJ8Hh54vcbQ/G1Hf+TxWoj5KW/NVwxfkoHJMnLlGLrvIrRcdNoBHG+8Z9tmkSSKfE6GYipwMxoixjE4o7ISdg8GVeGsPpC16WRabInwrOIkPspgrgvnVE7/1TGmZ3wx94TUbWgl3vC5Zqk6oOqQJ4BMFCET98DCECKM+n8BxFG/GAglIISAcgrCGWLO4VOe9t8kswfZnZdjdwe9befrbrZ7s2JadHYILBGNdQXfU7rxt9PXHnty825r6wppvEGylLahaiH2HnB8aVZ1u2qe2EKS7SgjWyHYGCcPhSE2WOzrLPDLcSc0u3bGa+i6G+RUQU21TbOg7N643drSVb6rWD356NTlo+/d+lR2qwV8n+ODpZxC/wOFMheUekkiw5RClMpuqBu9mMsQVKFR8hLIejGJYkpjnzDH1pgf6pRSolIK1aYmPGqCUnIXW5ulINWjXdqFr6RPgR/++KUHT19bOH+2+vBEEjQIZulI0t2lIwEo6+vY0K/ve/dIwNi9usH1yFj2sW5GXQk+W/rr0W889a1TKbGLb/29c/Kr+16ey9d2V7uT816USVIIlPRzKenf6UjuyC8y0H2kv2vsL7xZN7geGUsBiYZ4vHjqzKHc2wsnnvruRYx6Yf3RT39eWetO/erczfljNzoPKP8PBnNKO364cP7cg9ry9775zHfO3oln2wf993/yy6fX7cnnlttzj33YnjN7sfw/AcipwKy+5u8wPrwypVVfzcutl7/+7Isju8LYH00/+8VLmhUYx7uhebQbmHusnjndDvL5Ti+f8SKNhZBJKOQ+ACZgKK5QuS+yihUUMrc7OaVzy5Dsazm5fdqQ7N9/++QLNz9xUQD/Bez3iCs47u/lAAAAAElFTkSuQmCC',
        symbolRotate: '0', // 倾斜度
        symbolMargin: '-5px', // 控制分割图形的大小
        symbolSize: ['100%', 15],
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
          fontSize: 16,
        },
        data: data1,
        z: 1,
      },
    ],
  }
  return option
}

// *象形图 - 2
export const pictogram2 = () => {
  let data = ['2016', '2017', '2018', '2019', '2020']
  let value = [40, 80, 60, 20, 30, 40, 80]
  let arr = new Array(value.length).fill(100)
  let option = {
    backgroundColor: '#08132f',
    /** 区域位置*/
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
      textStyle: {
        color: '#A1D5FF',
        fontSize: 12,
      },
      data: [
        {
          name: '规上企业数',
          // 强制设置图形为圆。
          icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAAWUlEQVQokWP8v5vBk4GBYS4DA4MkA2ngOQMDQzILVPNEBgaGayQaoAXSywS1mVTNDFA9kkxkaEQBowYMFgNAKQqUKEgFmgwMDC9AKTEFmholSDThKQMDQzIAKiQNS7pPDfMAAAAASUVORK5CYII=',
          // 设置文本为红色
          textStyle: {
            color: 'white',
          },
        },
        {
          name: '规上工业企业数',
          // 强制设置图形为圆。
          icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAAWklEQVQoke2SsQ2AMAwEj2yREWCTZBlmYTkmQIQhLD0KSkNpVxScZMnNfXVgKphOTHJed8r0PLABOz4WYE1ADsgMJ6eA+OIf+MpAG1F4mYGrp1wxtUDKB6Z6A9yGZPqw3aZcAAAAAElFTkSuQmCC',
          // 设置文本为红色
          textStyle: {
            color: 'white',
          },
        },
      ],
      itemGap: 16, // 设置间距
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
        name: '(个)',
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
        name: '规上企业数',
        type: 'pictorialBar',
        barWidth: '20px',
        symbol:
          'image://data:image/png;base64,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',
        symbolRotate: '0', // 倾斜度
        symbolMargin: '-5px', // 控制分割图形的大小
        symbolSize: ['100%', '100%'],

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
        data: [150, 160, 170, 180, 200],
      },

      {
        name: '规上工业企业数',
        type: 'pictorialBar',
        barWidth: '20px',
        symbol:
          'image://data:image/png;base64,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',
        symbolRotate: '0', // 倾斜度
        barGap: '10%',
        symbolSize: ['100%', '100%'],

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
        data: [65, 70, 70, 80, 90],
      },
    ],
  }
  return option
}

// *象形图 - 3
export const pictogram3 = () => {
  let option = {
    legend: {
      left: '5%',
      icon: 'roundRect',
      itemHeight: 9, //修改icon图形大小
      // icon: "path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z",
      textStyle: {
        color: 'white', // 文字的颜色。
      },
    },
    backgroundColor: '#0C1954',
    /**区域位置*/
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['哈尔滨', '黑河', '牡丹江', '佳木斯', '大庆', '鸡西', '鹤岗'],
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(219,225,255,1)',
          width: 0,
          type: 'solid',
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(202, 255, 253,0.2)',
          width: 1,
          type: 'solid',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(202, 255, 253,0.2)',
          type: 'dashed',
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: 'white', //更改坐标轴文字颜色
        },
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: '数(人次)',
        type: 'pictorialBar',
        barCategoryGap: '40%',
        symbol: 'triangle',
        barWidth: '100%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
          normal: {
            opacity: 0.8,
            // color:'RGBA(133, 255, 105, 1)',
            color: new echarts.graphic.LinearGradient(
              0,
              1,
              0,
              0,
              [
                {
                  offset: 0,
                  color: '#22e7f1', // 0% 处的颜色
                },
                {
                  offset: 0.6,
                  color: '#116aef', // 60% 处的颜色
                },
                {
                  offset: 1,
                  color: 'RGBA(169, 255, 144, 1)', // 100% 处的颜色
                },
              ],
              false
            ),
          },
          emphasis: {
            opacity: 1,
          },
        },
        data: [123, 100, 125, 128, 122, 122, 100],
        z: 10,
      },
    ],
  }
  return option
}

// *圆柱体 - 1
export const cylinder = () => {
  let data1 = [15.12, 15.73, 16.07, 15, 15.43]
  let data2 = [-4.1, 4.03, 2.16, -6.6, 2.9]
  let option = {
    backgroundColor: '#08132f',
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        const rander = params
          .map((item) => {
            if (!['pictorialBar'].includes(item.seriesType)) {
              return `<div>${item.seriesName}: ${
                item.seriesType !== 'line' ? item.value : item.value + '%'
              }</div>`
            }
          })
          .join('')
        return `
            <div>${params[0].axisValue}</div>
            ${rander}
        `
      },
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: '10%',
      right: '10%',
      top: '15%',
      bottom: '15%',
    },
    xAxis: {
      data: ['2016', '2017', '2018', '2019', '2020'],
      show: true,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'gray',
          opacity: 1,
        },
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#fff',
          fontSize: 12,
        },
        margin: 10, // 刻度标签与轴线之间的距离。
      },
    },
    yAxis: {
      name: '(万元)',
      nameTextStyle: {
        align: 'left',
        color: '#fff',
        padding: [0, 0, -5, -15],
        fontSize: 12,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          opacity: 0.5,
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 12,
        },
      },
    },
    legend: {
      top: '4%',
      textStyle: {
        color: '#A1D5FF',
        fontSize: 12,
      },
      itemStyle: {
        color: '#12B9DB',
      },
      itemGap: 12, // 设置间距
    },
    series: [
      {
        // 三个最低下的圆片
        name: '',
        type: 'pictorialBar',
        symbolSize: [15, 5],
        symbolOffset: [0, 0],
        z: 12,
        itemStyle: {
          opacity: 1,
          color: function (params) {
            let a = params.name.slice(0, 2)
            return new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#12B9DB', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#6F8EF2', // 100% 处的颜色
                },
              ],
              false
            )
          },
        },
        data: [0.5, 0.5, 0.5, 0.5, 0.5],
      },

      // 下半截柱状图
      {
        name: '税收收入',
        type: 'bar',
        barWidth: 15,
        barGap: '-100%',
        itemStyle: {
          // lenged文本
          opacity: 0.7,
          color: function (params) {
            let a = params.name.slice(0, 2)
            return new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#12B9DB', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#6F8EF2', // 100% 处的颜色
                },
              ],
              false
            )
          },
        },
        data: data1,
      },
      {
        name: '',
        type: 'pictorialBar',
        symbolSize: [15, 5],
        symbolOffset: [0, 0],
        z: 5,
        itemStyle: {
          opacity: 1,
          color: function (params) {
            let a = params.name.slice(0, 2)

            return new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#12B9DB', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#6F8EF2', // 100% 处的颜色
                },
              ],
              false
            )
          },
        },
        symbolPosition: 'end',
        data: data1,
      },
    ],
  }
  return option
}

// *圆柱体 - 2
export const cylinder2 = () => {
  let data1 = [15.12, 12.73, 17.07, 14, 19.43]
  let option = {
    backgroundColor: '#08132f',
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        const rander = params
          .map((item) => {
            if (!['pictorialBar'].includes(item.seriesType)) {
              return `<div>${item.seriesName}: ${
                item.seriesType !== 'line' ? item.value : item.value + '%'
              }</div>`
            }
          })
          .join('')
        return `
            <div>${params[0].axisValue}</div>
            ${rander}
        `
      },
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: '10%',
      right: '10%',
      top: '15%',
      bottom: '15%',
    },
    xAxis: {
      data: ['2016', '2017', '2018', '2019', '2020'],
      show: true,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'gray',
          opacity: 1,
        },
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#fff',
          fontSize: 12,
        },
        margin: 10, // 刻度标签与轴线之间的距离。
      },
    },
    yAxis: {
      name: '(万元)',
      nameTextStyle: {
        align: 'left',
        color: '#fff',
        padding: [0, 0, -5, -15],
        fontSize: 12,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          opacity: 0.5,
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 12,
        },
      },
    },
    legend: {
      top: '4%',
      textStyle: {
        color: '#A1D5FF',
        fontSize: 12,
      },
      itemStyle: {
        color: '#12B9DB',
      },
      itemGap: 12, // 设置间距
    },
    series: [
      {
        //
        name: '',
        type: 'pictorialBar',
        // symbol: 'circle',
        symbolSize: [18, 18],
        symbolOffset: [0, -16],
        z: 12,
        itemStyle: {
          color: 'rgba(34,231,241,0.2)',
          borderColor: '#22e7f1',
          borderWidth: 1,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 10,
        },
        symbolPosition: 'end',
        data: data1,
      },

      // 下半截柱状图
      {
        name: '网格员',
        type: 'bar',
        barWidth: 12,
        // barGap: '-100%',
        // roundCap: true,

        itemStyle: {
          // lenged文本
          borderRadius: 10,
          color: function (params) {
            let a = params.name.slice(0, 2)
            return new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#22e7f1', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#116aef', // 100% 处的颜色
                },
              ],
              false
            )
          },
        },
        data: data1,
      },
    ],
  }
  return option
}
