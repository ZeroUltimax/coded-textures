import { uv, normalToColor, length2, color } from "./colorGenerator";

const anisotropyRemap = (s: number, t: number) => ({ u, v }: uv): uv => {
  u = u * s % 1 * 2 - 1;
  v = v * 2 * t % 2;

  while (length2({ u, v }) > 1) {
    u += (u < 0) ? 1 : -1;
    v -= 1;
  }

  return { u, v };
}

export const anisotropy = (s: number, t: number) => (uv: uv): color => {

  let { u, v } = anisotropyRemap(s, t)(uv);

  return {
    r: normalToColor(u),
    g: normalToColor(v),
    b: 1.0,
  }
}

export const anisotropyRotation = (s: number, t: number) => (uv: uv): color => {

  const { u, v } = anisotropyRemap(s, t)(uv);


  const color = (Math.atan2(v, u) / 2 / Math.PI + 1.25) % 1;

  return {
    r: color,
    g: color,
    b: color,
  }
}
