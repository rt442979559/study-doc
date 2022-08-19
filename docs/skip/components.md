# 组件 :rocket:

## 大屏自适应 :ringed_planet:

:::tip
适应 PC 可视化大屏。弹窗浮动窗口, 需要渲染在缩放元素内部
:::

### 封装

```vue
<template>
  <div :style="style">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'

interface Props {
  height?: number
  width?: number
}

const props = withDefaults(defineProps<Props>(), {
  height: 1080,
  width: 1920,
})

const tran = ref('scale(1) translate(-50%, -50%)')
const style = ref({
  width: props.width + 'px',
  position: 'absolute',
  transform: tran,
  transformOrigin: '0 0',
  height: props.height + 'px',
  top: '50%',
  left: '50%',
  background: '#eee',
})

//按比例自适应
const changeSize = (re = false) => {
  const htmlDom = document.documentElement

  let vw = 1
  let w = htmlDom.clientWidth
  let h = htmlDom.clientHeight
  let w_tran = (htmlDom.clientWidth / props.width) * vw
  let h_tran = htmlDom.clientHeight / props.height

  if (props.height * w_tran <= h) {
    tran.value =
      'scale(' +
      (htmlDom.clientWidth / props.width) * vw +
      ') translate(-50%, -50%)'
  } else {
    let s = htmlDom.clientHeight / props.height
    tran.value = 'scale(' + s + ') translate(-50%, -50%)'
  }
  htmlDom.style.height = htmlDom.clientHeight + 'px'
  if (!re) {
    nextTick(() => {
      changeSize(true)
    })
  }
}

onMounted(() => {
  changeSize()
  //尺寸按比例自适应
  window.addEventListener('resize', function () {
    changeSize()
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', function () {
    changeSize()
  })
})

const cont = `<div onclick="">button</div>`
</script>

<style>
/*全局样式*/
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  background-color: black;
}
</style>
```

### 使用

```vue
<template>
  <scale-layout :height="1080" :width="1920">
    <route-view />
  </scale-layout>
</template>
```

## 无限递归表格 :ringed_planet:

> 用于可视化的展示与修改表格数据。源码：[custom-visual](https://github.com/rt442979559/custom-visual)

### 演示

gif 图

## 文件分片上传 :ringed_planet:

> 将大文件按照一定大小进行分片切割，再进行上传。源码：[min-io](https://github.com/rt442979559/minio)

### 封装

```vue
<template>
  <div>
    <el-upload
      class="upload_minio"
      :drag="isdrag"
      multiple
      :auto-upload="false"
      action=""
      :on-change="onFileAdded"
    >
      <i v-if="isdrag" class="el-icon-upload"></i>
      <div v-if="isdrag" class="el-upload__text">
        将文件拖到此处，或<em>点击上传</em>
      </div>

      <el-button v-if="!isdrag" size="small" type="primary">点击上传</el-button>
    </el-upload>

    <ul class="file-list" v-if="this.fileList.length">
      <div class="sigle_file">
        <div class="sigle_file_name table-head">文件名称</div>
        <div class="sigle_file_size table-head">文件大小</div>
        <div class="sigle_file_status table-head">上传状态</div>
        <div class="sigle_file_action table-head">操作</div>
      </div>
      <div v-for="file in this.fileList" :key="file.uid" class="sigle_file">
        <div class="sigle_file_name">
          <i class="el-icon-files" style="margin-right: 10px"></i
          >{{ file.name }}
        </div>
        <div class="sigle_file_size">
          {{ getfilesize(file.size) }}
        </div>
        <div class="sigle_file_status">
          {{ file.status }}
        </div>
        <div class="sigle_file_action">
          <el-button
            type="text"
            @click="stopUpload(file)"
            v-if="!file.isStop && file.status.indexOf('上传中') != -1"
            >暂停</el-button
          >
          <el-button
            type="text"
            @click="startUpload(file)"
            v-if="file.isStop && file.status.indexOf('上传中') != -1"
            >上传</el-button
          >
          <el-button type="text" @click="remove(file)">移除</el-button>
        </div>
      </div>
    </ul>
    <div class="no-file" v-if="!this.fileList.length">
      <i class="el-icon-warning-outline"></i>暂无待上传文件
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SparkMD5 from 'spark-md5'
export default {
  name: 'MinIOUpload',
  props: {
    initChunkUploadUrl: {
      required: true,
    },
    composeFileUrl: {
      required: true,
    },
    isdrag: {
      default: true,
    },
    filechunkSize: {
      default: 1024 * 1024 * 6,
    },
  },
  data() {
    return {
      fileList: [],
      //切片大小单位字节
      // filechunkSize: 1024 * 1024 * 6,
      // //拖拽样式还是按钮样式
      // isdrag: true,
      // //获取后台未上传的分片地址
      // initChunkUploadUrl:
      //   "http://192.168.2.191:8546/api/minio/minioFile/initChunkUpload",
      // composeFileUrl:
      //   "http://192.168.2.191:8546/api/minio/minioFile/composeFile",
    }
  },
  methods: {
    stopUpload(file) {
      let arr = this.fileList
      let newarr = []
      arr.map((item) => {
        if (item.uid == file.uid) {
          item.isStop = true
        }
        newarr.push(item)
      })
      this.fileList = newarr
    },
    startUpload(file) {
      let arr = this.fileList
      let newarr = []
      arr.map((item) => {
        if (item.uid == file.uid) {
          item.isStop = false
          if (item.uniqueIdentifier) {
            this.computeMD5Success(item)
          }
        }
        newarr.push(item)
      })
      this.fileList = newarr
    },
    remove(file) {
      this.stopUpload(file)
      let arr = this.fileList
      this.fileList = arr.filter((item) => item.uid != file.uid)
    },
    getfilesize(filesize) {
      let size = ''
      if (filesize > 1024 * 1024 * 1024) {
        size = (filesize / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
      } else if (filesize > 1024 * 1024) {
        size = (filesize / (1024 * 1024)).toFixed(2) + ' MB'
      } else if (filesize > 1024) {
        size = (filesize / 1024).toFixed(2) + ' KB'
      } else {
        size = filesize + ' byte'
      }
      return size
    },
    onFileAdded(file) {
      this.fileList.push(file)
      this.computeMD5(file)
    },
    //更新进度
    changeStatus(file, msg) {
      let arr = this.fileList
      let newarr = []
      arr.map((item) => {
        if (item.uid == file.uid) {
          item.status = msg
        }
        newarr.push(item)
      })
      this.fileList = newarr
      if (msg == '上传完成') {
        //进行回调
        console.log(file, 'sjkd')
        this.$emit('success', file)
      }
    },
    //请求后台进行拼合
    splitFile(file) {
      this.changeStatus(file, '拼合中')
      axios({
        url: this.composeFileUrl,
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        data: {
          WebAPIBean: {
            query: {
              md5: file.uniqueIdentifier,
              fileName: file.name,
            },
          },
        },
      }).then(() => {
        this.changeStatus(file, '上传完成')
      })
    },
    //计算MD5
    computeMD5(file) {
      let blobSlice =
          File.prototype.slice ||
          File.prototype.mozSlice ||
          File.prototype.webkitSlice,
        chunkSize = this.filechunkSize,
        chunks =
          Math.ceil(file.size / chunkSize) > 1
            ? Math.ceil(file.size / chunkSize) - 1
            : 1,
        currentChunk = 0,
        spark = new SparkMD5.ArrayBuffer(),
        fileReader = new FileReader()
      let time = new Date().getTime()
      this.changeStatus(file, '开始校验')
      //总的切片数量
      file.totalChunkCounts = chunks
      //切片大小
      file.chunkSize = chunkSize
      //
      file.isStop = false
      loadNext()
      fileReader.onload = (e) => {
        spark.append(e.target.result)
        currentChunk++
        this.changeStatus(
          file,
          '校验中  ' + ((currentChunk / chunks) * 100).toFixed(0) + '%'
        )
        if (currentChunk < chunks) {
          if (file.isStop) {
            console.log('暂停校验')
            return
          }
          loadNext()
        } else {
          //文件加密后的MD5标识
          let md5 = spark.end()
          console.log(
            `MD5计算完成：${file.name} \nMD5：${md5} \n分片：${chunks} 大小:${
              file.size
            } 用时：${(new Date().getTime() - time) / 1000} s`
          )
          spark.destroy() //释放缓存
          file.uniqueIdentifier = md5 //将文件md5赋值给文件唯一标识
          this.computeMD5Success(file)
        }
      }
      fileReader.onerror = () => {
        console.warn('oops, something went wrong.')
        file.cancel()
      }
      function loadNext() {
        let start = currentChunk * chunkSize
        let end = currentChunk + 1 == chunks ? file.size : start + chunkSize
        fileReader.readAsArrayBuffer(blobSlice.call(file.raw, start, end))
      }
    },
    async computeMD5Success(file) {
      axios({
        url: this.initChunkUploadUrl,
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        data: {
          WebAPIBean: {
            query: {
              md5: file.uniqueIdentifier,
              chunkCount: file.totalChunkCounts,
              fileSize: file.size,
            },
          },
        },
      }).then((res) => {
        let arr = res.data.data
        if (!Array.isArray(arr)) {
          this.changeStatus(file, '上传完成')
          return
        } else if (arr.length == 0) {
          //分片已上传，但未进行拼合，请求后台进行拼合
          this.splitFile(file)
        }
        //重新读取文件进行上传
        let uploadfileReader = new FileReader()
        let uploadblobSlice =
          File.prototype.slice ||
          File.prototype.mozSlice ||
          File.prototype.webkitSlice
        let indexfileE = 0
        let total = arr.length
        let uploadcurrentChunk = 0
        uploadloadNext()
        uploadfileReader.onload = (e) => {
          axios({
            url: arr[uploadcurrentChunk].uploadUrl,
            method: 'put',
            headers: {
              'Content-Type': 'application/octet-stream',
            },
            data: e.target.result,
          }).then(() => {
            indexfileE++
            if (indexfileE == total) {
              //请求后台进行拼合
              this.splitFile(file)
            } else {
              if (file.isStop) {
                console.log('暂停上传')
                return
              }
              this.changeStatus(
                file,
                '上传中 ' +
                  (
                    ((file.totalChunkCounts - total + indexfileE) /
                      file.totalChunkCounts) *
                    100
                  ).toFixed(0) +
                  '%'
              )
              uploadcurrentChunk++
              if (uploadcurrentChunk < total) {
                uploadloadNext()
              }
            }
          })
        }
        uploadfileReader.onerror = () => {
          console.warn('oops, something went wrong.')
          file.cancel()
        }
        function uploadloadNext() {
          if (file.isStop) {
            console.log('暂停上传')
            return
          }
          let start = (arr[uploadcurrentChunk].partNumber - 1) * file.chunkSize
          let end =
            arr[uploadcurrentChunk].partNumber == file.totalChunkCounts
              ? file.size
              : start + file.chunkSize
          uploadfileReader.readAsArrayBuffer(
            uploadblobSlice.call(file.raw, start, end)
          )
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
.table-head {
  font-size: 15px;
  font-weight: 600;
}
.upload_minio {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  ::v-deep .el-upload-list {
    display: none;
  }
}
.file-list {
  list-style: none;
  .sigle_file {
    display: flex;
    flex-direction: row;
    .sigle_file_name {
      width: 40%;
    }
    .sigle_file_size {
      width: 20%;
    }
    .sigle_file_status {
      width: 20%;
    }
    .sigle_file_action {
      width: 20%;
      ::v-deep .el-button {
        padding: 0;
      }
    }
  }
}
.no-file {
  display: flex;
  justify-content: center;
  i {
    margin: 3px;
  }
}
</style>
```

### 使用

```vue
<template>
  <MinIOUpload
    ref="minio"
    :isdrag="isdrag"
    :initChunkUploadUrl="initChunkUploadUrl"
    :composeFileUrl="composeFileUrl"
    :filechunkSize="filechunkSize"
    @success="success"
  >
  </MinIOUpload>
</template>

<script>
  data() {
    return {
      tableData:[],
      isdrag:true,
      //切片完获取切片上传地址
      initChunkUploadUrl:"http://192.168.2.191:8546/api/minio/minioFile/initChunkUpload",
      //拼合地址
      composeFileUrl:"http://192.168.2.191:8546/api/minio/minioFile/composeFile",
      filechunkSize:1024 * 1024 * 10,
      getFileList:'http://192.168.2.191:8546/api/minio/minioFile/getFileList',
      getFileDownloadLink:'http://192.168.2.191:8546/api/minio/minioFile/getFileDownloadLink',
    }
  }
</script>
```

### 参数

| 属性               | 类型    | 默认            | 说明                   |
| ------------------ | ------- | --------------- | -------------------- |
| filechunkSize      | number  | 1024 * 1024 * 6 | 切片大小单位字节       |
| isdrag             | boolean | true            | 拖拽样式还是按钮样式   |
| initChunkUploadUrl | string  |                 | 后台未上传的分片地址型 |
| composeFileUrl     | string  |                 | 分片集成后请求的地址   |
