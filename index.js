const imagemin = require("imagemin")
const imageminMozjpeg = require("imagemin-mozjpeg")
//默认情况下，MozJPEG 生成的是 Progressive JPEG,也就是那种从模糊到清晰
const imageminPngquant = require("imagemin-pngquant")
const imageminSvgo = require("imagemin-svgo")

;(async () => {
  const files = await imagemin(process.argv.slice(2), {
    destination: "dist",
    plugins: [
      imageminMozjpeg({
        quality: 70,
      }),
      imageminPngquant({
        quality: [0.65, 0.8],
      }),
      imageminSvgo({
        plugins: [
          {removeViewBox: false},
        ],
      }),
    ],
  })
})()