export const plugin = async () =>
  new Promise((resolve, reject) => {
    let load = false

    // ?如果已加载直接返回
    if (typeof AMap !== 'undefined') {
      resolve(AMap)
      return true
    }
    window._AMapSecurityConfig = {
      securityJsCode: `eb942a91bf9b401f20b94d1120cc2015`,
    }

    const script = document.createElement('script')
    // const script1 = document.createElement('script')
    // const script2 = document.createElement('script')

    script.src =
      'https://webapi.amap.com/maps?v=1.4.15&key=d3b369f37bc25183a31cc7e3864000c6'
    // script1.src = 'https://webapi.amap.com/ui/1.1/main.js?v=1.1.1'
    // script2.src = 'https://webapi.amap.com/demos/js/liteToolbar.js'

    document.head.appendChild(script)
    // document.head.appendChild(script1)
    // document.head.appendChild(script2)
    // window.onLoad = () => {
    //   console.log(load, 'window.onload')
    //   load = true
    //   resolve(AMap)
    // }
    // 避免未触发window.onload方法
    setTimeout(() => {
      if (!load) {
        if (AMap) {
          resolve(AMap)
        }
      }
    }, 3000)
    script.load = () => {
      console.log(AMap, 'AMap')
      resolve(AMap)
    }
  })
