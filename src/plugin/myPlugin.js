
 const alyImgDomain = 'aliyuncs.com'

 const alyImgProcessMark = 'x-oss-process=image'
// 判断是否为阿里云图片
 const isAlyImg = url => url.indexOf(alyImgDomain) >= 0
// 匹配链接中的图片处理参数
const regAlyImgProcessParams = new RegExp('&?' + alyImgProcessMark + '[^&]*')
// 默认获取不含任何参数的图片地址，第二个参数true时，只剔除阿里云图片参数，其余参数保留
 const getAlyImgOrigin = (url, other) => {
  return url.replace(other ? regAlyImgProcessParams : /\?.*/, '')
}
// 参数参考阿里云文档：https://help.aliyun.com/document_detail/44688.html
 const alyImgParamsFormat = ({ w, h, l, s, color, m = 'fill', limit = 0, q = 90, Q, format }) => {
  const strs = [alyImgProcessMark]
  // 阿里云建议优先拼接缩放；下面四个值，至少要有一个
  if (w || h || l || s) {
    const resize = { w, h, l, s, color, m, limit }
    strs.push('/resize')
    Object.keys(resize).forEach((key) => {
      resize[key] !== undefined && strs.push(',', key, '_', resize[key])
    })
  }

  // 格式切换
  format && strs.push('/format', ',', format)

  // 质量压缩，目前阿里云仅支持JPG和WebP；默认压缩 90
  strs.push('/quality')
  Q ? strs.push(',Q_', Q) : strs.push(',q_', q)

  return strs.join('')
}

// 获取阿里云压缩过的图片地址
const getAlyImgProcess = (url, params, h) => {
  if (!isAlyImg(url) || !params) return url

  // 兼容直接传入宽高的写法
  if (typeof params !== 'object') {
    params = {
      w: params,
      h
    }
  }
  const originImg = getAlyImgOrigin(url, true)
  const imgParams = alyImgParamsFormat(params)
  return originImg + (originImg.indexOf('?') >= 0 ? '&' : '?') + imgParams
}

class MyPlugin {
  constructor(option = {}) {
    Object.keys(option).forEach((key) => {
      this[key] = option[key]
    })
  }
  apply(compiler) {
    //   compiler.hooks有很多钩子  同步的钩子使用tap，异步的钩子使用tapAsync。 tapPromise
    /* entryOption  webpack中的entry被处理过之后调用
      afterPlugin   初始化内部插件集合完成后调用
      afterResolvers 设置完成之后触发
      initialize   初始化编译器
      beforeRun    在开始执行一次构建之前调用
      run                     开始读取records之前调用
      beforeCompile       编译之前
      compile    
      afterCompile
      emit            输出assets到output目录之前执行。
      afterEmit       输出assets到output目录之后执行。
      done            compilation 完成时执行。
   */
      const reg = /<img [^>]*src=['"]([^'"]+)[^>]*>/gi
      compiler.hooks.emit.tap('发射事件', (compilation) => {
        Object.keys(compilation.assets).forEach((data) => {
          let content = compilation.assets[data].source() // 欲处理的文本
          if (typeof content === 'string') { 
            content = content.replace(reg, function (word) {
               return getAlyImgProcess(word, 20, 20)
             })
             
             compilation.assets[data] = {
               source() {
                 return content
               },
               size() {
                 return content.length
               },
             }
          }
           
        })
      })
    
  }
}
module.exports = MyPlugin


