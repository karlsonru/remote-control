import { screen, mouse, Region } from '@nut-tree/nut-js';
import Jimp from 'jimp';

export class PrintActions {
  async print() {
    const position = await mouse.getPosition();
    const region = new Region(position.x, position.y, 200, 200);
    const image = await screen.grabRegion(region);

    const jimp = new Jimp({
      data: image.data,
      width: image.width,
      height: image.height,
    });

    const base64img = (await jimp.getBase64Async(Jimp.MIME_PNG)).split(',')[1];

    return base64img;
  }
}
