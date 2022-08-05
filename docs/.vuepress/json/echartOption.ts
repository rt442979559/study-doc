import * as echarts from 'echarts'
import { color } from 'echarts'

export function getEchartOption(name) {
  const optionGroup = {
    // 城市特征 - 仪表盘 echart
    instrument: {
      series: [{
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 4,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255,39,23,1)'
          },
          {
            offset: 0.5,
            color: 'rgba(255,241,1,1)'
          }, {
            offset: 1,
            color: 'rgba(41,191,42,.5)'
          }])
        },
        progress: {
          show: true,
          width: 10
        },

        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 10

          }
        },
        axisTick: {
          show: false,
          distance: -15,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: '#999'
          }
        },
        splitLine: {
          distance: 0,
          show: true,
          length: 0,
          lineStyle: {
            width: 3,
            color: '#999'
          }
        },
        axisLabel: {
          distance: -25,
          color: '#999',
          fontSize: 14
        },
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          width: '60%',
          lineHeight: 40,
          height: 15,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 18,
          textAlign: 'center',
          fontWeight: 'bolder',
          formatter: '{value} ',
          color: '#00b12d'
        },
        data: [{
          value: 0
        }]
      }
      ]
    },
    // 任务进度
    task: {
      color: ['#1492ff', '#f7f8fa'],
      tooltip: {
        show: false,
        trigger: 'item'
      },
      series: [
        {
          name: '重点任务',
          type: 'pie',
          radius: ['60%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false,
              fontSize: '24',
              fontWeight: 'bold',
              formatter: (params) => {
                return params.value + '%'
              }
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 32, name: '重点任务' },
            { value: 68, name: '无' }
          ]
        }
      ]
    },
    // 任务进度
    taskSchedule: {
      grid: {
        top: '40',
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        data: ['正常任务', '预警任务', '滞后任务'],
        padding: [0, -50, 0, -100],
        itemWidth: 15,
        itemHeight: 8,
        textStyle: { // 图例文字的样式
          fontSize: 14
        }
      },
      xAxis: {
        type: 'category',
        data: ['党政机关', '数字政府', '数字社会', '数字经济', '数字法治'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#f2f3f5',
            width: 0,
            type: 'solid'
          }
        },
        axisLabel: { // x轴文字的配置
          show: true,
          textStyle: {
            color: '#666666'
          }
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '正常任务',
          type: 'bar',
          data: [268, 199, 52, 319, 249],
          label: {
            show: true,
            position: 'top'
          },
          itemStyle: {
            color: '#6dd993'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 15,
              shadowColor: 'rgba(0,0,0,0.3)'
            }
          },
          barWidth: 24,
          barGap: 0
        },
        {
          name: '预警任务',
          type: 'bar',
          data: [150, 80, 123, 110, 85, 56],
          label: {
            show: true,
            position: 'top'
          },
          itemStyle: {
            color: '#ff8126'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 15,
              shadowColor: 'rgba(0,0,0,0.3)'
            }
          },
          barWidth: 24,
          barGap: 0
        },
        {
          name: '滞后任务',
          type: 'bar',
          data: [150, 80, 20, 33, 41, 65],
          label: {
            show: true,
            position: 'top'
          },
          itemStyle: {
            color: '#fc5c5c'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 15,
              shadowColor: 'rgba(0,0,0,0.3)'
            }
          },
          barWidth: 24,
          barGap: 0
        }
      ]
    },
    taskAll: {
      title: [{
        left: '0%',
        text: '任务分布情况',
        textStyle: {
          fontSize: 16,
          fontWeight: 600
        }
      }, {
        left: 'center',
        top: '40%',
        text: 354,
        textStyle: {
          fontSize: 30
        },
        subtext: '总任务',
        subtextStyle: {
          fontSize: 14
        }
      }],
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%'
      },
      tooltip: {
        trigger: 'item'
      },
      color: ['#6dd993', '#f1924e', '#fc5c5c'],
      label: {
        show: true,
        color: 'auto',
        formatter: '{b}: {c} ({d})'
      },
      series: [{
        name: '任务分布情况',
        type: 'pie',
        radius: ['50%', '65%'],
        data: [{
          value: 23,
          name: '正常'
        }, {
          value: 33,
          name: '预警'
        }, {
          value: 31,
          name: '滞留'
        }]
      }]
    },
    fengxian: {
      title: {
        show: false
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%'
      },
      tooltip: {
        trigger: 'item'
      },

      label: {
        show: true,
        color: 'auto',
        formatter: '{b}: {c} ({d})'
      },
      series: [{
        name: '风险预警',
        type: 'pie',
        radius: ['50%', '65%'],
        data: [{
          value: 15,
          name: '信用风险预警'
        }, {
          value: 1565,
          name: '资金风险预警'
        }, {
          value: 1314,
          name: '违规风险预警'
        }, {
          value: 1052,
          name: '超时风险预警'
        }, {
          value: 165,
          name: '举报风险预警'
        }, {
          value: 1124,
          name: '取缔风险预警'
        }]
      }]
    },
    liucheng: {
      title: {
        show: false
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%'
      },
      tooltip: {
        trigger: 'item'
      },

      label: {
        show: true,
        color: 'auto',
        formatter: '{b}: {c}'
      },
      series: [{
        name: '全流程重点环节监督',
        type: 'pie',
        radius: ['50%', '65%'],
        data: [{
          value: 12,
          name: '镇街监督'
        }, {
          value: 62,
          name: '教育监督'
        }, {
          value: 24,
          name: '其他部门监督'
        }, {
          value: 20,
          name: '联合执法监督'
        }]
      }]
    },
    fuwu: {
      tooltip: {
        trigger: 'item'
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%'
      },
      legend: {
        right: '150',
        top: 'center',
        orient: 'vertical',
        textStyle: {
          color: '#65ABE7',
          fontSize: 10
        }
      },
      series: [
        {
          type: 'pie',
          radius: '80%',
          roseType: 'area',
          center: ['30%', '50%'],
          label: {
            show: true,
            fontSize: 14,
            formatter: '{d}%',
            color: '#666'
          },
          data: [
            { value: 60, name: '网络人员', itemStyle: {
              color: '#ee6666'
            }},
            { value: 55, name: '排查次数', itemStyle: {
              color: '#fac858'
            }},
            { value: 35, name: '帮改次数', itemStyle: {
              color: '#9edf7f'
            }},
            { value: 45, name: '取缔次数', itemStyle: {
              color: '#333742'
            }}
          ],
          // data:docStatusPro,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    },
    guocheng: {
      legend: {
        data: ['办结率', '延时率', '反馈率']
      },
      xAxis: {
        type: 'category',
        data: ['镇街', '部门联合执法', '举报反馈']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} %'
        }
      },
      series: [{
        name: '办结率',
        data: [80, 43, 0],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }, {
        name: '延时率',
        data: [90, 16, 0],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }, {
        name: '反馈率',
        data: [0, 0, 43],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }]
    },
    jianguan: {
      legend: {
        data: ['本月', '本年']
      },
      xAxis: {
        type: 'category',
        data: ['信用预警', '资源预警', '多次举报', '多次违规']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '本月',
        data: [3, 4, 10, 15],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }, {
        name: '本年',
        data: [10, 35, 20, 20],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }]
    },
    pdCount: {
      xAxis: {
        type: 'category',
        data: ['第一产业', '第二产业', '第三产业'],
        axisLabel: {
          fontSize: 10,
          rotate: 45,
          interval: 0
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: (params) => {
          return params[0].value + '亿元'
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [{
        data: [0.29, 91.88, 201.8],
        type: 'bar',
        itemStyle: {
          normal: {
            label: {
              show: true,
              fontSize: 12,
              color: '#666666',
              position: 'top',
              formatter: (params) => {
                return params.data + '亿元'
              }
            }
          }

        },
        showBackground: true
      }]
    },
    industrial: {
      tooltip: {
        trigger: 'item',
        position: [10, 10]
      },
      grid: {
        right: '10%'
      },
      legend: {
        left: 'left',
        orient: 'vertical'
      },
      series: [
        {
          name: '出口',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['75%', '60%'],
          avoidLabelOverlap: false,

          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '12'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 119.41, name: '出口总额' },
            { value: 2.39, name: '进口总额' }
          ]
        }
      ]
    },
    retail: {
      color: ['#ff8126', '#1492ff'],
      tooltip: {
        trigger: 'item',
        position: [10, 10]
      },
      grid: {
        right: '10%'
      },
      legend: {
        left: 'left'
      },
      series: [
        {
          name: '预算',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '60%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '12'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1411.65, name: '预算收入' },
            { value: 2111.79, name: '预算支出' }
          ]
        }
      ]
    },
    construction: {
      title: {
        text: '近10年建设用地情况（公顷）',
        x: 'center',
        textStyle: {
          fontSize: 16,
          color: '#333333'
        },
        padding: [20, 0, 0, 0]
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      legend: {
        data: ['合同总数', '合同金额'],
        padding: [25, -50, 0, -100],
        itemWidth: 15,
        itemHeight: 8,
        textStyle: { // 图例文字的样式
          fontSize: 12
        },
        show: false
      },
      xAxis: {
        type: 'category',
        data: ['2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#f2f3f5',
            width: 0,
            type: 'solid'
          }
        },
        axisLabel: { // x轴文字的配置
          show: true,
          textStyle: {
            color: '#666666'
          },
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#999999',
          fontSize: 14
        },
        interval: 25
      },
      series: [
        {
          name: '合同总数',
          itemStyle: {

            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#3196fa'
              },
              {
                offset: 1,
                color: 'rgba(49,150,250,0.8)'
              }]),
              barBorderRadius: [5, 5, 0, 0]
            }
          },
          barWidth: 25,
          data: [100, 20, 50, 30, 50, 60, 70, 80, 90, 66],
          type: 'bar'
        }

      ]
    },
    plough: {
      title: {
        text: '近8年耕地资源情况（公顷）',
        x: 'center',
        textStyle: {
          fontSize: 16,
          color: '#333333'
        },
        padding: [20, 0, 0, 0]
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      legend: {
        data: ['合同总数', '合同金额'],
        padding: [25, -50, 0, -100],
        itemWidth: 15,
        itemHeight: 8,
        textStyle: { // 图例文字的样式
          fontSize: 12
        },
        show: false
      },
      xAxis: {
        type: 'category',
        data: ['2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#f2f3f5',
            width: 0,
            type: 'solid'
          }
        },
        axisLabel: { // x轴文字的配置
          show: true,
          textStyle: {
            color: '#666666'
          },
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#999999',
          fontSize: 14
        },
        interval: 25
      },
      series: [

        {
          name: '合同金额',
          symbolSize: 0,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: '#1492ff',
              lineStyle: {
                width: 2,
                type: 'solid' // 'dotted'虚线 'solid'实线
              }
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#5497ff'
                  },
                  {
                    offset: 1,
                    color: 'rgba(84,151,255,0.1)'
                  }
                ])
            }
          },
          data: [100, 20, 50, 30, 50, 60, 70, 33],
          type: 'line'
        }
      ]
    },
    vaccine: {
      graphic: [
        { // 环形图中间添加文字 可以通过 /n 换行
          type: 'text', // 通过不同top值可以设置上下显示
          left: 'center',
          top: '40%',
          style: {
            text: '130,587',
            textAlign: 'center',
            fill: '#1492ff', // 文字的颜色
            width: 30,
            height: 30,
            fontSize: 24,
            fontFamily: 'Microsoft YaHei'
          }
        },
        { // 环形图中间添加文字 可以通过 /n 换行
          type: 'text', // 通过不同top值可以设置上下显示
          left: 'center',
          top: '55%',
          style: {
            text: '合同总量',
            textAlign: 'center',
            fill: '#666666', // 文字的颜色
            width: 30,
            height: 30,
            fontSize: 16,
            fontFamily: 'Microsoft YaHei'
          }
        }
      ],
      tooltip: {
        trigger: 'item'

      },
      legend: {
        type: 'scroll',
        show: false
      },
      series: [
        {
          center: ['50%', '50%'],
          name: '企业管理',
          type: 'pie',
          radius: ['60%', '85%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: []
        }

      ]
    },
    project: {
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      legend: {
        data: ['建设工程', '保洁服务', '国有资产租赁'],
        padding: [20, -50, 0, -100],
        itemWidth: 15,
        itemHeight: 8,
        textStyle: { // 图例文字的样式
          fontSize: 12
        }
      },
      xAxis: {
        type: 'category',
        data: ['2020年', '2021年'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#f2f3f5',
            width: 0,
            type: 'solid'
          }
        },
        axisLabel: { // x轴文字的配置
          show: true,
          textStyle: {
            color: '#666666'
          }
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '建设工程',
          itemStyle: {
            color: '#3799fa',
            normal: {
              barBorderRadius: [8, 8, 0, 0]
            }
          },
          data: [150, 80],
          type: 'bar'
        },
        {
          name: '保洁服务',
          itemStyle: {
            color: '#f15973',
            normal: {
              barBorderRadius: [8, 8, 0, 0]
            }
          },
          data: [150, 80],
          type: 'bar'
        },
        {
          name: '国有资产租赁',
          itemStyle: {
            color: '#fbd53e',
            normal: {
              barBorderRadius: [8, 8, 0, 0]
            }
          },
          data: [150, 80],
          type: 'bar'
        }
      ]
    },
    RDP: {
      grid: {
        left: '0%',
        right: '0%',
        bottom: '2%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: ['2015', '2016', '2017', '2018', '2019', '2020'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#999999',
            width: 0,
            type: 'solid'
          }
        }
      },
      yAxis: {
        type: 'value'
      },
      color: ['#facc14', '#2fc25b', '#ef4864', '#6236ff', '#1492ff'],
      legend: {
        show: true,
        data: ['规上企业', '研究机构', '高等院校', '其它', 'R&D投入占GDP比例']
      },
      series: [{
        name: '规上企业',
        data: [80, 120, 100, 150, 120, 70],
        type: 'line',
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#facc14'
          }, {
            offset: 1,
            color: '#ffffff'
          }])
        }
      }, {
        name: '研究机构',
        data: [30, 50, 60, 65, 55, 40],
        type: 'line',
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#2fc25b'
          }, {
            offset: 1,
            color: '#ffffff'
          }])
        }
      }, {
        name: '高等院校',
        data: [40, 240, 50, 10, 100, 40],
        type: 'line',
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#ef4864'
          }, {
            offset: 1,
            color: '#ffffff'
          }])
        }
      }, {
        name: '其它',
        data: [10, 150, 80, 50, 150, 200],
        type: 'line',
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#6236ff'
          }, {
            offset: 1,
            color: '#ffffff'
          }])
        }
      }, {
        name: 'R&D投入占GDP比例',
        data: [150, 230, 224, 218, 135, 147],
        type: 'line',
        showSymbol: false,
        smooth: false,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 3,
              dashOffset: 40, // v5.0.0才支持
              type: 'dotted' // 'dotted'虚线 'solid'实线
            }
          }
        }
      }]
    },
    progress: {
      grid: {
        left: '0%',
        right: '0%',
        bottom: '2%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: ['南湖科创小镇', '瓯海生命健康小镇', '茶山梦创小镇'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#999999',
            width: 0,
            type: 'solid'
          }
        }
      },
      yAxis: {
        type: 'value'
      },
      color: ['#2399ff', '#ef4864', '#fbd12c', '#40c768'],
      legend: {
        show: true,
        data: ['高能级研发机构', '高素质领军型研发人才和团队', '高精尖科技型产业化项目', '高科技型标杆企业']
      },
      series: [{
        name: '高能级研发机构',
        data: [3, 8, 2],
        type: 'line',
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#2399ff'
          }, {
            offset: 1,
            color: '#ffffff'
          }])
        }
      }, {
        name: '高素质领军型研发人才和团队',
        data: [2, 5, 4],
        type: 'line',
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#ef4864'
          }, {
            offset: 1,
            color: '#ffffff'
          }])
        }
      }, {
        name: '高精尖科技型产业化项目',
        data: [5, 3, 9],
        type: 'line',
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#fbd12c'
          }, {
            offset: 1,
            color: '#ffffff'
          }])
        }
      }, {
        name: '高科技型标杆企业',
        data: [2, 2, 7],
        type: 'line',
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#40c768'
          }, {
            offset: 1,
            color: '#ffffff'
          }])
        }
      }]
    },
    ducha: {
      grid: {
        left: '0%',
        right: '0%',
        bottom: '2%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['06-08', '06-09', '06-10', '06-11', '06-12', '06-13', '06-14', '06-15', '06-16', '06-17'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#999999',
            width: 0,
            type: 'solid'
          }
        }
      },
      yAxis: {
        type: 'value',
        max: 15,
        interval: 3
      },

      legend: {
        show: true,
        data: ['全部', '现场整改', '限期整改', '停业整改', '整改达标', '整改不达标']
      },
      series: [{
        name: '全部',
        data: [11, 0, 13, 5, 0, 0, 9, 3, 3, 0],
        type: 'line',
        showSymbol: true,
        smooth: true,
        areaStyle: {

        }
      }, {
        name: '现场整改',
        data: [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        type: 'line',
        showSymbol: true,
        smooth: true,
        areaStyle: {

        }
      }, {
        name: '限期整改',
        data: [0, 0, 1, 1, 0, 0, 4, 0, 0, 0],
        type: 'line',
        showSymbol: true,
        smooth: true,
        areaStyle: {

        }
      }, {
        name: '停业整改',
        data: [0, 0, 4, 2, 0, 0, 1, 0, 0, 0],
        type: 'line',
        showSymbol: true,
        smooth: true,
        areaStyle: {

        }
      }, {
        name: '整改达标',
        data: [2, 0, 4, 1, 0, 0, 0, 0, 1, 0],
        type: 'line',
        showSymbol: true,
        smooth: true,
        areaStyle: {

        }
      }, {
        name: '整改不达标',
        data: [5, 0, 4, 3, 0, 0, 5, 0, 0, 0],
        type: 'line',
        showSymbol: true,
        smooth: true,
        areaStyle: {

        }
      }]
    },
    tousu: {
      grid: {
        left: '0%',
        right: '0%',
        bottom: '2%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['06-08', '06-09', '06-10', '06-11', '06-12', '06-13', '06-14', '06-15', '06-16', '06-17'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#999999',
            width: 0,
            type: 'solid'
          }
        }
      },
      yAxis: {
        type: 'value',
        max: 15,
        interval: 3
      },

      legend: {
        show: true,
        data: ['待受理', '镇街待核查', '镇街已回复', '培治办已回复']
      },
      series: [{
        name: '待受理',
        data: [4, 2, 5, 1, 0, 0, 0, 0, 0, 0],
        type: 'line',
        showSymbol: true,
        smooth: false,
        areaStyle: {

        }
      }, {
        name: '镇街待核查',
        data: [8, 2, 10, 1, 0, 0, 0, 0, 0, 0],
        type: 'line',
        showSymbol: true,
        smooth: false,
        areaStyle: {

        }
      }, {
        name: '镇街已回复',
        data: [10, 2, 14, 3, 0, 0, 0, 0, 0, 0],
        type: 'line',
        showSymbol: true,
        smooth: false,
        areaStyle: {

        }
      }, {
        name: '培治办已回复',
        data: [10, 2, 14, 3, 0, 0, 0, 0, 0, 0],
        type: 'line',
        showSymbol: true,
        smooth: false,
        areaStyle: {

        }
      }]
    },
    yujing: {
      grid: {
        left: '0%',
        right: '0%',
        bottom: '2%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2月', '3月', '4月', '5月', '6月'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#999999',
            width: 0,
            type: 'solid'
          }
        }
      },
      yAxis: {
        type: 'value',
        max: 2000,
        interval: 400
      },
      legend: {
        show: true,
        data: ['蓝色', '绿色', '黄色', '红色']
      },
      series: [{
        name: '蓝色',
        data: [144, 140, 0, 174, 111],
        type: 'line',
        showSymbol: true,
        smooth: true,
        areaStyle: {

        }
      }, {
        name: '绿色',
        data: [80, 0, 30, 12, 181],
        type: 'line',
        showSymbol: true,
        smooth: true,
        areaStyle: {

        }
      }, {
        name: '黄色',
        data: [45, 560, 40, 434, 1861],
        type: 'line',
        showSymbol: true,
        smooth: true,
        areaStyle: {

        }
      }, {
        name: '红色',
        data: [166, 133, 0, 12, 261],
        type: 'line',
        showSymbol: true,
        smooth: true,
        areaStyle: {

        }
      }]
    },
    xuncha: {
      grid: {
        left: '0%',
        right: '0%',
        bottom: '2%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['网格员', '部门巡查', '其他举报'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#999999',
            width: 0,
            type: 'solid'
          }
        }
      },
      yAxis: {
        type: 'value',
        max: 15,
        interval: 3
      },
      legend: {
        show: true,
        data: ['本日', '本月']
      },
      series: [{
        name: '本日',
        data: [2, 3, 5],
        type: 'line',
        showSymbol: true,
        smooth: true

      }, {
        name: '本月',
        data: [8, 12, 16],
        type: 'line',
        showSymbol: true,
        smooth: true

      }]
    },
    manager: {
      grid: {
        left: '3%',
        right: '3%',
        bottom: '0%',
        top: '0%',
        containLabel: true
      },
      tooltip: {
        trigger: 'item',
        position: ['30%', '25%']
      },
      legend: {
        type: 'scroll',
        show: false
      },
      series: [
        {
          center: ['50%', '50%'],
          name: '企业管理',
          type: 'pie',
          radius: ['65%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ]
        },
        {
          center: ['50%', '50%'],
          name: '企业管理',

          type: 'pie',
          radius: ['60%', '55%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ]
        }
      ]
    },
    train: {
      angleAxis: {
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        min: 0,
        max: 100,
        boundaryGap: ['0', '100'],
        startAngle: 90
      },
      radiusAxis: {
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        data: ['a', 'b', 'c'],
        z: 10
      },
      polar: {
        radius: '100%'
      },
      series: [
        {
          name: '企业管理',
          type: 'pie',
          radius: ['35%', '60%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 10156, name: '线上通过',
              itemStyle: {
                normal: {
                  color: '#ef4864'
                }
              }},
            { value: 4514, name: '线下通过',
              itemStyle: {
                normal: {
                  color: '#facc14'
                }
              }

            },
            { value: 2875, name: '未通过',
              itemStyle: {
                normal: {
                  color: '#f2f3f5'
                }
              }

            }
          ]
        },
        {
          type: 'bar',
          data: [0, 0, 17.74],
          coordinateSystem: 'polar',
          barMaxWidth: 10,
          z: 2,
          roundCap: true,
          color: '#1492ff',
          barGap: '100%'
        },
        {
          type: 'bar',
          data: [0, 0, 100],
          z: 0,
          silent: true,
          coordinateSystem: 'polar',
          barMaxWidth: 10,
          name: 'C',
          roundCap: true,
          color: '#f2f3f5',
          barGap: '-100%'
        }
      ],
      tooltip: {
        show: false
      }
    },
    flow: {
      backgroundColor: '#fff',
      color: [],
      legend: {
        data: [],
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 15
      },
      grid: {
        top: '0%',
        bottom: '0%',
        left: '0%',
        containLabel: false
      },
      xAxis: [{
        show: false
      }],
      series: []
    },
    gender: {
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      legend: {
        show: false,
        data: ['合同总数', '合同金额'],
        padding: [25, -50, 0, -100],
        itemWidth: 15,
        itemHeight: 8,
        textStyle: { // 图例文字的样式
          fontSize: 12
        }
      },
      xAxis: {
        type: 'category',
        data: ['北岙街道', '大门镇', '东屏街道', '鹿西乡', '霓屿街道', '元觉街道'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#999999',
            width: 0,
            type: 'solid'
          }
        },
        axisLabel: { // x轴文字的配置
          show: true,
          textStyle: {
            color: '#666666'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#999999',
          fontSize: 14
        },
        interval: 25
      },
      series: [
        {
          name: '合同总数',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#3196fa'
              },
              {
                offset: 1,
                color: 'rgba(49,150,250,0.8)'
              }]),
              barBorderRadius: [3, 3, 0, 0]
            }
          },
          barWidth: 25,
          data: [100, 20, 50, 30, 50, 60, 70, 80, 90, 66, 22, 99],
          type: 'bar'
        }

      ]
    },
    water: {
      legend: {
        show: true,
        textStyle: { // 图例文字的样式
          fontSize: 16,
          color: '#333333'
        },
        padding: [20, 0, 0, 0]
      },
      tooltip: {
        trigger: 'axis'
      },
      color: ['#3296fa', '#ef4864', '#fbd640'],
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#999999',
            width: 0,
            type: 'solid'
          }
        },
        axisLabel: { // x轴文字的配置
          show: true,
          axisLabel: {
            color: '#999999',
            fontSize: 14
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#999999',
          fontSize: 14
        },
        interval: 25
      },
      series: [
        {
          name: '水温(℃)',
          data: [80, 120, 100, 150, 120, 70, 22, 55],
          type: 'line',
          showSymbol: false
        },
        {
          name: 'pH值(无量纲)',
          data: [10, 55, 77, 150, 11, 22, 55, 55],
          type: 'line',
          showSymbol: false
        },
        {
          name: '溶解氧',
          data: [80, 65, 25, 100, 120, 70, 66, 55],
          type: 'line',
          showSymbol: false
        }

      ]
    }

  }
  return optionGroup[name]
}
