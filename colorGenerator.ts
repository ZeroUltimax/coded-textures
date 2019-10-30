class extent {
  constructor(public min: number, public max: number) { }
  public get width() { return this.max - this.min };
};

export type uv = { u: number, v: number };
export type color = { r: number, g: number, b: number };
export type colorGenerator = (pos: uv) => color;

export const uniformSpace = new extent(0, 1);
export const colorSpace = uniformSpace;
export const normalSpace = new extent(-1, 1);
export const byteSpace = new extent(0, 255);

const bound = (x: number, extent: extent) => Math.min(extent.max, Math.max(extent.min, x));
const remapExtent = (x: number, current: extent, altered: extent) => (bound(x, current) - current.min) / current.width * altered.width + altered.min;
export const makeRandom = (extent: extent) => () => remapExtent(Math.random(), uniformSpace, extent);

export const normalToColor = (x: number) => remapExtent(x, normalSpace, colorSpace);
export const colorToNormal = (x: number) => remapExtent(x, colorSpace, normalSpace);
export const colorToByte = (x: number) => Math.round(remapExtent(x, colorSpace, byteSpace));


export const length2 = ({ u, v }: uv): number => u * u + v * v;
