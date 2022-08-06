# 常用方法

## 文件下载

### 获取 blob

> @param {String} url 目标文件地址 @return {cb}

```js
function getBlob(url, cb) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    if (xhr.status === 200) {
      cb(xhr.response)
    }
  }
  xhr.send()
}
```

### 保存文件到本地

> @param {Blob} blob @param {String} filename 想要保存的文件名称

```js
function saveAs(blob, filename) {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename)
  } else {
    let link = document.createElement('a')
    let body = document.querySelector('body')

    link.href = window.URL.createObjectURL(blob)
    link.download = filename

    // fix Firefox
    link.style.display = 'none'
    body.appendChild(link)

    link.click()
    body.removeChild(link)

    window.URL.revokeObjectURL(link.href)
  }
}
```

## 时间转化

### 格式化：yyyy-mm-dd

> date:时间戳 ， separator:分隔符

```js
export function formatDate(date, separator = '-') {
  let myyear = date.getFullYear()
  let mymonth = date.getMonth() + 1
  let myweekday = date.getDate()

  if (mymonth < 10) {
    mymonth = '0' + mymonth
  }
  if (myweekday < 10) {
    myweekday = '0' + myweekday
  }
  return myyear + separator + mymonth + separator + myweekday
}
```

### 本周起始日期

> @returns {startTime,endTime} 返回去重后的数组

```js
export function getWeekDate() {
  const now = new Date() // 当前日期
  const nowDayOfWeek = now.getDay() // 今天本周的第几天
  const nowDay = now.getDate() // 当前日
  const nowMonth = now.getMonth() // 当前月
  const nowYear = now.getFullYear() // 当前年

  const weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek)
  const weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek))
  const startTime = formatDate(weekStartDate) + ' 00:00:00'
  const endTime = formatDate(weekEndDate) + ' 23:59:59'
  return { startTime, endTime }
}
```

### 将秒转化为时分秒

> @params value 多少秒 @returns {h 时， m 分 s 秒}

```js
export function formatSeconds(value) {
  const result = parseInt(value)
  const h =
    Math.floor(result / 3600) < 10
      ? '0' + Math.floor(result / 3600)
      : Math.floor(result / 3600)
  const m =
    Math.floor((result / 60) % 60) < 10
      ? '0' + Math.floor((result / 60) % 60)
      : Math.floor((result / 60) % 60)
  const s =
    Math.floor(result % 60) < 10
      ? '0' + Math.floor(result % 60)
      : Math.floor(result % 60)
  return { h, m, s }
}
```

### 距离当天的时间日期

> @params day 天数 @returns 日期 年-月-日

```js
export function getStartAndEndDate(day = 0) {
  let today = new Date()
  let beforMilliseconds = today.getTime() - 1000 * 3600 * 24 * day
  let beforday = new Date()
  beforday.setTime(beforMilliseconds)
  let strYear = beforday.getFullYear()
  let strDay = beforday.getDate()
  let strMonth = beforday.getMonth() + 1
  if (strDay < 10) {
    strDay = '0' + strDay
  }
  if (strMonth < 10) {
    strMonth = '0' + strMonth
  }
  return strYear + '-' + strMonth + '-' + strDay
}
```

### 距离当前的时间展示

> 分别有 1， 小时前，分钟前， 刚刚

```js
function timeAgo(time, props) {
  const propsMap = props || { minute: 'minute', hour: 'hour', day: 'day' }
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), propsMap.minute)
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), propsMap.hour)
  } else {
    return pluralize(~~(between / 86400), propsMap.day)
  }
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}
```

### 目标时间距离今天

> getDay(-7) // 返回前 7 天的日期

```js
function getDay(day, split = '-') {
  let today = new Date()

  let targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day

  today.setTime(targetday_milliseconds)

  let tYear = today.getFullYear()
  let tMonth = today.getMonth() + 1
  let tDate = today.getDate()
  tMonth = (tMonth + '').padStart(2, 0)
  tDate = (tDate + '').padStart(2, 0)
  return tYear + split + tMonth + split + tDate
}
```

## websoket 链接

:::tip 总共 4 个事件 open， message， close，error
:::

### soket 实体类

> url 如果是 https 则写成 wss 如果是 http 则写成 ws

```js
class jtWebSocket {
  // 构造函数
  constructor() {
    this.webSocket = null // webSocket对象
    this.url = null // webSocket连接的url
    this.lastHeartBeat = 0 // 上一次心跳时间
    this.connectTimer = null // 重连定时器
    this.isPauseConnet = null // 是否要暂停连接
  }
  initWebSocket(url) {
    // 初始化weosocket
    this.url = url
    this.webSocket = new WebSocket(this.url)

    this.lastHeartBeat = new Date().getTime()
    if (this.webSocket) {
      this.webSocket.onopen = this.websocketonopen
      this.webSocket.onerror = this.websocketonerror
      this.webSocket.onclose = this.websocketclose
    }
  }
  websocketonopen() {
    // 连接建立之后执行send方法发送数据
    clearInterval(this.connectTimer)
    this.isPauseConnet = true
    this.connectTimer = null
    this.connectTimer = setInterval(function () {
      if (this.connetNum > 3) {
        return
      }
      if (this.webSocket) {
        if (
          this.webSocket.readyState === 3 ||
          this.webSocket.readyState === 4
        ) {
          if (this.isPauseConnet === true) {
            this.initWebSocket()
            this.connetNum++
          }
        }
      } else {
        if (this.isPauseConnet === true) {
          this.initWebSocket()
          this.connetNum++
        }
      }
    }, 55000)
  }
  // 连接建立失败重连
  websocketonerror(callback) {
    this.isLoadImg = false
    if (this.webSocket && this.webSocket.readyState) {
      if (this.webSocket.readyState === 3 || this.webSocket.readyState === 4) {
        if (this.isPauseConnet === false) {
          this.webSocket = null
        }
      }
    }
    callback()
  }
  // 断开了连接
  websocketclose() {
    if (this.webSocket && this.webSocket.readyState) {
      if (this.webSocket.readyState === 3 || this.webSocket.readyState === 4) {
        if (this.isPauseConnet === false) {
          this.webSocket = null
        }
      }
    }
  }
  destroywebsocket() {
    // 清除定时器 关闭websocket
    this.isPauseConnet = false
    clearInterval(this.connectTimer)
    this.connectTimer = null
    if (this.webSocket) {
      this.webSocket.close()
    }
  }
  // 断线重连
  checkConnect() {
    if (this.connetNum > 3) {
      return
    }
    if (this.webSocket) {
      if (this.webSocket.readyState === 3 || this.webSocket.readyState === 4) {
        if (this.isPauseConnet === true) {
          this.initWebSocket()
          this.connetNum++
        }
      }
    } else {
      if (this.isPauseConnet === true) {
        this.initWebSocket()
        this.connetNum++
      }
    }
  }
  // 监听消息
  websocketonmessage(callback) {
    this.webSocket.onmessage = (e) => {
      const data = JSON.parse(e.data)
      this.lastHeartBeat = new Date().getTime()
      if (callback) callback(data)
    }
  }
  // 发送数据
  websocketsend(Data) {
    // 数据发送
    if (this.webSocket !== null && this.webSocket.readyState === 1) {
      this.webSocket.send(JSON.stringify(Data))
    }
  }
}
export default jtWebSocket
```

### vue2 中使用

> 引入 import jtWebSocket from '@/utils/websoketClass'

```js
data () {
  return {
    websocket:null
  }
},
methods: {
    // 初始化websocket相关
  initWebSocket(){
    this.websocket = new jtWebSocket()
    this.websocket.initWebSocket('ws://127.0.0.1/xxx')
    this.websocket.websocketonmessage(data=>{
      console.log(data) // 及时通信数据
    })
    // 连接出错监听
    this.websocket.websocketonerror(()=>{
      //监听到连接出错后的处理
    })
  },
  // ws 发送消息
  handlePostMsg(data){
    this.websocket.websocketsend(data)
  },
  // 断开websocket连接
  destroyWs () {
    this.websocket.destroywebsocket()
  },
}
```
