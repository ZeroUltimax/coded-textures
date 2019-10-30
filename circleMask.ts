import { uv, normalToColor, length2, color } from "./colorGenerator";



export const circleMask = (f: (uv: uv) => color, deflt: color) => (uv: uv): color => {

  let x = uv.u - 0.5;
  let y = uv.v - 0.5;

  if (x * x + y * y > 0.5 * 0.5) {
    return deflt;
  } else {
    return f(uv);
  }
}
