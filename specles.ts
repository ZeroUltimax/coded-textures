import { normalSpace, makeRandom, colorGenerator, normalToColor, color } from './colorGenerator'

let randomNormal = makeRandom(normalSpace);

export const specles: colorGenerator = () => {
  let nX, nY, nZ, lXY2;
  do {
    nX = randomNormal();
    nY = randomNormal();
    lXY2 = nX * nX + nY * nY;
  } while (lXY2 > 1);

  // Solving nX^2 + nY^2 + nZ^2 = 1
  nZ = Math.sqrt(1 - lXY2);
  const result: color = {
    r: normalToColor(nX),
    g: normalToColor(nY),
    b: normalToColor(nZ)
  };
  return result;
}