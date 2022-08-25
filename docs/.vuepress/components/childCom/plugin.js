export const plugin = () =>
  new Promise(function (resolve, reject) {
    const load = false

    // 如果已加载直接返回
    if (typeof AMap !== 'undefined') {
      resolve(AMap)
      return true
    }

    const script = document.createElement('script')

    script.src =
      '//webapi.amap.com/maps?v=1.4.15&key=d3b369f37bc25183a31cc7e3864000c6	'
    document.body.appendChild(script)

    // window.onload = () => {
    //   console.log('window.onload')
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
      console.log('script.onload')
      resolve(AMap)
    }
  })
