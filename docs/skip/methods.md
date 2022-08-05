# 常用方法

## 文件下载

### 获取 blob
> @param {String} url 目标文件地址 @return {cb} 

```js
 function getBlob(url, cb) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.onload = function() {
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
      navigator.msSaveBlob(blob, filename);
    } else {
      var link = document.createElement("a")
      var body = document.querySelector("body")

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
## 将时间转化成指定格式
