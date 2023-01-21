import { mouse, up, left, right, down } from '@nut-tree/nut-js';

export class MouseActions {
  async up(num: number) {
    await mouse.move(up(num));
  }

  async down(num: number) {
    await mouse.move(down(num));
  }
  async left(num: number) {
    await mouse.move(left(num));
  }
  async right(num: number) {
    await mouse.move(right(num));
  }

  async getPosition() {
    return await mouse.getPosition();
  }
}
