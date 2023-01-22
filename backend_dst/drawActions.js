var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mouse, Button, straightTo, Point } from '@nut-tree/nut-js';
export class DrawActions {
    circle(radius) {
        return __awaiter(this, void 0, void 0, function* () {
            return 'Not implemented';
            const points = [];
            const position = yield mouse.getPosition();
            const n = 360;
            for (let i = 0; i < n; i++) {
                const rad = 2 * Math.PI * i / n;
                const x = radius * Math.cos(rad) + position.x;
                const y = radius * Math.sin(rad) + position.y;
                points.push(new Point(x, y));
            }
            yield mouse.pressButton(Button.LEFT);
            points.map((point) => __awaiter(this, void 0, void 0, function* () { return (yield mouse.setPosition(point)); }));
            yield mouse.releaseButton(Button.LEFT);
        });
    }
    rectangle(width, height) {
        return __awaiter(this, void 0, void 0, function* () {
            const position = yield mouse.getPosition();
            yield mouse.pressButton(Button.LEFT);
            yield mouse.move(straightTo(new Point(position.x + width, position.y)));
            yield mouse.move(straightTo(new Point(position.x + width, position.y + height)));
            yield mouse.move(straightTo(new Point(position.x, position.y + height)));
            yield mouse.move(straightTo(new Point(position.x, position.y)));
            yield mouse.releaseButton(Button.LEFT);
        });
    }
    square(num) {
        return __awaiter(this, void 0, void 0, function* () {
            const position = yield mouse.getPosition();
            yield mouse.pressButton(Button.LEFT);
            yield mouse.move(straightTo(new Point(position.x + num, position.y)));
            yield mouse.move(straightTo(new Point(position.x + num, position.y + num)));
            yield mouse.move(straightTo(new Point(position.x, position.y + num)));
            yield mouse.move(straightTo(new Point(position.x, position.y)));
            yield mouse.releaseButton(Button.LEFT);
        });
    }
}
