import { MouseActions } from './mouseActions.js';
import { DrawActions } from './drawActions.js';

const mouseActions = new MouseActions();
const drawActions = new DrawActions();

export async function router(command: string) {
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
      const position = await mouseActions.getPosition();
      result = `mouse_position ${position.x},${position.y}`;
      break;
    }
  }
 
  if (action.startsWith('draw')) {
    switch(action) {
    case 'draw_circle':
      drawActions.circle(+value);
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
    result = 'prnt';
  }

  return result ?? action;
}
