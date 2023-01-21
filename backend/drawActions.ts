import { mouse, Button, straightTo, Point } from '@nut-tree/nut-js';

export class DrawActions {
  async circle(radius: number) {
    // const position = await mouse.getPosition();
    await mouse.pressButton(Button.LEFT);
    await mouse.releaseButton(Button.LEFT);
  }

  async rectangle(width: number, height: number) {
    const position = await mouse.getPosition();
    await mouse.pressButton(Button.LEFT);
    // y - вниз, x - вправо и влево 
    await mouse.move(straightTo(new Point(position.x + width, position.y)));
    await mouse.move(straightTo(new Point(position.x + width, position.y + height)));
    await mouse.move(straightTo(new Point(position.x, position.y + height)));
    await mouse.move(straightTo(new Point(position.x, position.y)));
    await mouse.releaseButton(Button.LEFT);
  }

  async square(num: number) {
    const position = await mouse.getPosition();
    await mouse.pressButton(Button.LEFT);
    await mouse.move(straightTo(new Point(position.x + num, position.y)));
    await mouse.move(straightTo(new Point(position.x + num, position.y + num)));
    await mouse.move(straightTo(new Point(position.x, position.y + num)));
    await mouse.move(straightTo(new Point(position.x, position.y)));
    await mouse.releaseButton(Button.LEFT);
  }
}
