# 常用插件

## 截图

### 安装

```shell
 npm install vue-web-screen-shot
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
<template>
  <!--截图组件-->
  <screen-short
     v-if="screenshotStatus"
    @destroy-component="destroyComponent"
    @get-image-data="getImg">
  </screen-short>
</template>

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
```
### 参数

| 属性 | 类型 | 默认 | 说明 |
| - | - | - | - |
|    screenshotStatus      |  boolean       |  false     |  是否开启截图      | 
|    level                 |  number	      |  1         |  截图容器层级      | 
|    clickCutFullScreen    |  boolean	      |  false     |  单击截全屏启用状态,值为boolean类型      | 
|    hiddenToolIco         |  object        |  {}        |  需要隐藏的截图工具栏图标。值为{ save?: boolean; undo?: boolean; confirm?: boolean }类型。传你需要隐藏的图标名称，将值设为true即可      | 