import { mouse, up, left, right, down } from '@nut-tree/nut-js';

export class MouseNavigation {
  async mouse_up(num: number) {
    await mouse.move(up(num));
  }

  async mouse_down(num: number) {
    await mouse.move(down(num));
  }
  async mouse_left(num: number) {
    await mouse.move(left(num));
  }
  async mouse_right(num: number) {
    await mouse.move(right(num));
  }

  async mouse_position() {
    return await mouse.getPosition();
  }
}
