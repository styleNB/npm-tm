class imageCompress 

_imageCompressor (event) {
  var file = event
  console.log('file.size111111', file.size)
  if (file.type === 'image/jpeg') {
    return new Promise((resolve, reject) => {
      new ImageCompressor(file, { quality: 0.2,
        success: function (result) {
          console.log('file.size2222222', result.size)
          const formData = new FormData()
          formData.append('file', result, result.name)
          resolve(formData)
        },
        error: function (err) {
          console.log('压缩图片错误jpg', err)
        }
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      lrz(file, { quality: 0.4 })
        .then(function (rst) {
          const formData = new FormData()
          resolve(rst.formData)
          console.log('file.size333333', rst.fileLen)
        }).catch(function (err) {
          console.log('压缩图片错误png', err)
        })
    })
  }
}
