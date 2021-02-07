import Lrz from 'lrz'

/*eslint-disable*/
export default class ImageCompress {
  constructor (file) {
    return new Promise((resolve, reject) => {
      Lrz(file, { quality: 0.4 })
        .then(function (rst) {
          resolve(rst)
        }).catch(function (err) {
          console.log('压缩图片错误png', err)
        })
    })
  }
}
