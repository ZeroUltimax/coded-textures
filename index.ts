import { createCanvas, CanvasRenderingContext2D } from 'canvas';
import { color, colorToByte, uv, length2, normalToColor, colorGenerator, colorToNormal } from './colorGenerator';
import { saveCanvasToFile } from './file'
import { anisotropy, anisotropyRotation } from './anisotropy';
import { circleMask } from './circleMask';



let width = 2048, height = 2048;

const myCanvas = createCanvas(width, height);
const myCtx = myCanvas.getContext('2d');
myCtx.globalCompositeOperation = 'copy';

// const spaceMin = -1.0;
// const spaceMax = 1.0;

// const spaceWidth = spaceMax - spaceMin;

function setPixel(ctx: CanvasRenderingContext2D, { u, v }: uv, { r, g, b }: color, ) {
  let byteR = colorToByte(r),
    byteG = colorToByte(g),
    byteB = colorToByte(b);
  ctx.fillStyle = `rgb(${byteR},${byteG},${byteB});`;
  ctx.fillRect(u, v, 1, 1);
}

let colorGen = circleMask(anisotropy(4, 4), { r: 0.5, g: 0.5, b: 1 });

for (let u = 0; u < width; u++) {
  for (let v = 0; v < height; v++) {
    setPixel(myCtx, { u, v }, colorGen({ u: u / width, v: v / height }));
  }
}


// const byteRDefault = red ? 0 : Math.round(255 * redDefault);
// const byteGDefault = green ? 0 : Math.round(255 * greenDefault);
// const byteBDefault = blue ? 0 : Math.round(255 * blueDefault);


// dstCtx.globalCompositeOperation = 'lighten';
// tmpCtx.fillStyle = FILL_STYLE_COLORS[fillStyleIndex];
// tmpCtx.fillRect(0, 0, width, height);
// tmpCtx.globalCompositeOperation = 'multiply';

// const dstImgData = dstCtx.getImageData(0, 0, width, height);
// const dstData = dstImgData.data;
// const srcData = alphaData.data;
// const nbPixelChan = width * height * 4;
// for (let s = alphaChan, d = 3; s < nbPixelChan; s += 4, d += 4) {
//   dstData[d] = Math.min(255, Math.round(srcData[s] * alphaFactor));
// }



saveCanvasToFile('/home/arobertson/Desktop/test.jpg', myCanvas);
