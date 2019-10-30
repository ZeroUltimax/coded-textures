import fs from 'fs';
import { Canvas } from "canvas";
import { promisify } from "util";

export async function saveCanvasToFile(uri: string, cvs: Canvas) {
  let buffer = cvs.toBuffer('image/jpeg', { quality: 1.0 });
  await promisify(fs.writeFile)(uri, buffer);
}
