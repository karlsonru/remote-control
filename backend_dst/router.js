var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator['throw'](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
import { MouseActions } from './mouseActions.js';
import { DrawActions } from './drawActions.js';
import { PrintActions } from './printActions.js';
const mouseActions = new MouseActions();
const drawActions = new DrawActions();
const printActions = new PrintActions();
export function router(command) {
  return __awaiter(this, void 0, void 0, function* () {
    const [action, value, height] = command.split(' ');
    let result;
    if (action.startsWith('mouse')) {
      switch (action) {
      case 'mouse_up':
        mouseActions.up(+value);
        break;
      case 'mouse_down':
        mouseActions.down(+value);
        break;
      case 'mouse_left':
        mouseActions.left(+value);
        break;
      case 'mouse_right':
        mouseActions.right(+value);
        break;
      case 'mouse_position':
        const position = yield mouseActions.getPosition();
        result = `mouse_position ${position.x},${position.y}`;
        break;
      }
    }
    if (action.startsWith('draw')) {
      switch (action) {
      case 'draw_circle':
        yield drawActions.circle(+value);
        break;
      case 'draw_rectangle':
        drawActions.rectangle(+value, +height);
        break;
      case 'draw_square':
        drawActions.square(+value);
        break;
      }
    }
    if (action.startsWith('prnt')) {
      const image = yield printActions.print();
      result = `prnt_scrn ${image}`;
    }
    return result !== null && result !== void 0 ? result : `${action}_${value}`;
  });
}
