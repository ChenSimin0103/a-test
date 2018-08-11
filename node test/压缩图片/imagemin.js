
const imagemin = require('imagemin');
const PNGImage = 'assets/png/*.png';
const JPEGImage = 'assets/jpg/*.jpg';
const outputPNG = 'output/png';
const outputJPEG = 'output/jpg';

const imageminMOzjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');


const optimiseJPEGImages = function() {
  return new Promise((resolve, reject) => {
    imagemin([JPEGImage], outputJPEG, {
      plugins: [
        imageminMOzjpeg({
          quality: 10,
        }),
      ],
    });
    resolve();
  });
};

const optimisePNGImages = () => {
  return new Promise((resolve, reject) => {
    imagemin([PNGImage], outputPNG, {
      plugins: [imageminPngquant({ quality: 70 })],
    });
  });
  resolve();
};

// 转 jpg 和 png为 webp 格式的图片，一种google提供的视觉效果更好，更小的图片格式
// 暂时有问题： Windows Imaging Component 缺这个？？
const convertPNGToWebp = () => {
  return new Promise((resolve, reject) => {
    imagemin([PNGImage], outputPNG, {
      use: [
        imageminWebp({
          quality: 85,
        })
      ]
    });
    resolve();
  })
}
const convertJPGToWebp = () => {
  return new Promise((resolve, reject) => {
    imagemin([JPEGImage], outputJPEG, {
      use: [
        imageminWebp({
          quality: 70,
        })
      ]
    })
  });
  resolve();
}

// 顺序执行
optimiseJPEGImages()
  .then(() => optimisePNGImages())
  .then(() => convertPNGToWebp())
//   .then(() => convertJPGToWebp())
  .catch(err => console.log(err));
