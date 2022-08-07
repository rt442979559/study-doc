# 常用插件

## 截图 v3

> [web 端自定义截屏插件](https://www.npmjs.com/package/vue-web-screen-shot)，仅支持 Vue3。如需在 vue2 使用请移步 ：[js-web-screen-shot](https://www.npmjs.com/package/js-web-screen-shot)

### 安装

```shell
npm i vue-web-screen-shot
```

### 引入

```ts
// 导入截屏插件
import screenShort from 'vue-web-screen-shot'
const app = createApp(App)
// 使用截屏插件
app.use(screenShort, { enableWebRtc: false })
```

### 示例

```vue
<script lang="ts" setup>
const screenshotStatus = ref<boolean>(false)
// 销毁组件函数
const destroyComponent = (status: boolean) => {
  screenshotStatus.value = status
}
// 获取裁剪区域图片信息
const getImg = (base64: string) => {
  console.log('截图组件传递的图片信息', base64)
}
</script>

<template>
  <!--截图组件-->
  <screen-short
    v-if="screenshotStatus"
    @destroy-component="destroyComponent"
    @get-image-data="getImg"
  >
  </screen-short>
</template>
```

### 参数

| 属性               | 类型    | 默认  | 说明                                                                                                                                |
| ------------------ | ------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------- |
| screenshotStatus   | boolean | false | 是否开启截图                                                                                                                        |
| level              | number  | 1     | 截图容器层级                                                                                                                        |
| clickCutFullScreen | boolean | false | 单击截全屏启用状态,值为 boolean 类型                                                                                                |
| hiddenToolIco      | object  | {}    | 需要隐藏的截图工具栏图标。值为{ save?: boolean; undo?: boolean; confirm?: boolean }类型。传你需要隐藏的图标名称，将值设为 true 即可 |

## aliplayer 播放器 v3

> 支持 mp4, 直播流：hls(推荐使用，m3u8 等), rtmp(需要安装 flash,360 等部分浏览器支持)。如需在 vue2 使用请移步：[vue-aliplayer](https://www.npmjs.com/package/vue-aliplayer)

### 安装

```shell
npm i vue-aliplayer-v3 --save
```

### 封装

```vue
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const props = defineProps<{ options?: AliplayerOptions; source?: string }>()

const aliplayerCss =
  'https://g.alicdn.com/de/prismplayer/2.9.21/skins/default/aliplayer-min.css'
const playerJs = 'https://g.alicdn.com/de/prismplayer/2.9.21/aliplayer-min.js'

const domId = 'video_id_' + uuidv4() // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
function init() {
  const linkID = 'app__aliplayer-min-css'
  const scriptID = 'app__aliplayer-min-js'
  const head = document.getElementsByTagName('head')
  const html = document.getElementsByTagName('html')
  let scriptTag = document.getElementById(scriptID)
  let linkIDTag = document.getElementById(linkID)
  if (!linkIDTag || !scriptTag) {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = aliplayerCss
    link.id = linkID
    head[0].appendChild(link)
    link.addEventListener('load', () => {
      // console.log('scriptTag');
      scriptTag = document.createElement('script')
      if (scriptTag) {
        // @ts-ignore
        scriptTag.type = 'text/javascript'
        scriptTag.id = scriptID
        // @ts-ignore
        scriptTag.src = playerJs
        html[0].appendChild(scriptTag)
      }
      //兼容单页加载和硬加载
      scriptTag.addEventListener('load', () => {
        initPlayer()
      })
    })
  } else {
    initPlayer() //这样是为了兼容页面上有多个播放器
  }
}

let player: Aliplayer
function initPlayer() {
  let source = props.options?.source || props.source || ''
  const isRtmp = source.toLowerCase().indexOf('rtmp') > -1,
    player = new Aliplayer(
      {
        ...props.options,
        id: domId,
        source: props.source || props.options?.source, //播放地址，可以是第三方直播地址，或阿里云直播服务中的拉流地址。
        isLive: isRtmp || props.options?.isLive, //是否为直播播放。
        useFlashPrism: isRtmp || props.options?.useFlashPrism,
        format: isRtmp ? undefined : props.options?.format,
      },
      function (player_) {
        // player_.play()
      }
    )
}

watch(
  () => props.source,
  (value) => {
    initPlayer()
  }
)

onMounted(() => {
  init()
})

defineExpose({
  getPlayer: () => player,
})
</script>

<template>
  <div :id="domId" />
</template>
```

### 示例

```vue
<script setup lang="ts">
import { ref } from 'vue'
import VideoPlayer from '../index'

// defineProps<{ msg: string }>()

const videoRef = ref()

function play() {
  console.log(videoRef.value)
  if (videoRef.value) {
    let player = videoRef.value.getPlayer()
    player.replay()
  }
}

const options = ref<AliplayerOptions>({
  isLive: true,
  format: 'm3u8',
})

const source = ref(
  'http://10.56.212.242:8896/live/12224700010000000500993-/hls.m3u8'
)

function change() {
  source.value = 'rtmp://60.190.82.147:1935/live/openUrl/Axe8k6Y'
}
</script>

<template>
  <div>
    <button @click="play">play</button>
    <button @click="change">change source</button>
    <VideoPlayer :options="options" :source="source" ref="videoRef" />
  </div>
</template>
```

## 无缝滚动 v2

> 文字、列表无缝滚动组件。如需在 vue3 使用请移步：[vue3-seamless-scroll](https://github.com/xfy520/vue3-seamless-scroll)

### 安装

```shell
npm i vue-seamless-scroll --save
```

### 引入

```js
import vueSeamlessScroll from 'vue-seamless-scroll'
```

### 示例

```vue
<template>
  <div class="" style="padding: 50px;">
    <div class="page-example3" style="">
      <vue-seamless-scroll :data="listData" :class-option="defaultOption">
        <ul class="ul-scoll">
          <li v-for="(item, index) in listData" :key="index">
            <span class="title">{{ item.title }}：</span
            ><span class="date">{{ item.time }}</span>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: 'Example3',
  components: {
    vueSeamlessScroll,
  },
  data() {
    // 这里存放数据
    return {
      listData: [],
    }
  },
  // 监听属性 类似于data概念
  computed: {
    defaultOption() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      }
    },
  },
  // 方法集合
  methods: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    for (let i = 0; i <script 15; i++) {
      let j = {
        title: '无缝滚动第几条啊啊啊-' + i,
        time: '2020-04-10',
      }
      this.listData.push(j)
    }
  },
}
</script>

<style scoped lang="scss">
.page-example3 {
  width: 400px;
  height: 200px;
  overflow: hidden;
  border: 1px solid #283dff;
  .ul-scoll {
    li {
      margin: 6px;
      padding: 5px;
      background: rgba(198, 142, 226, 0.4);
    }
  }
}
</style>
　
```
