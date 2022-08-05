# 常用插件

## 截图插件

### 安装
```shell
 npm install vue-web-screen-shot
```
### 引入
```ts
  // 导入截屏插件
  import screenShort from "vue-web-screen-shot";
  const app = createApp(App);
  // 使用截屏插件
  app.use(screenShort, { enableWebRtc: false })
```