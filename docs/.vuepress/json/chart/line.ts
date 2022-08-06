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
