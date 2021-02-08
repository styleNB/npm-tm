import Lrz from 'lrz'

/*eslint-disable*/
export default class ImageCompress {
  constructor (file, quality) {
    return new Promise((resolve, reject) => {
      Lrz(file, { quality: quality || 0.4 }) // 压缩比例默认0.4
        .then(function (rst) {
          resolve(rst)
        }).catch(function (err) {
          console.log('压缩图片错误png', err)
        })
    })
  }
}
