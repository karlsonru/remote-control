import { mouse, Button, straightTo, Point } from '@nut-tree/nut-js';

export class DrawActions {
  async circle(radius: number) {
    return 'Not implemented';

    const points = [];
    const position = await mouse.getPosition();

    const n = 360;
    for (let i = 0; i < n; i++) {
      const rad = 2 * Math.PI * i / n;
      const x = radius * Math.cos(rad) + position.x;
      const y = radius * Math.sin(rad) + position.y;
      points.push(new Point(x, y));
    }

    await mouse.pressButton(Button.LEFT);
    points.map(async (point) => (await mouse.setPosition(point)));
    await mouse.releaseButton(Button.LEFT);
  }

  async rectangle(width: number, height: number) {
    const position = await mouse.getPosition();
    await mouse.pressButton(Button.LEFT);
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
