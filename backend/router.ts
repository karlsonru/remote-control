import { MouseActions } from './mouseActions.js';

const mouseActions = new MouseActions();

export async function router(command: string) {
  if (command.startsWith('mouse')) {
    const [action, value] = command.split(' ');

    let result; 
    switch (action) {
    case 'mouse_up':
      await mouseActions.up(+value);
      break;
    case 'mouse_down':
      await mouseActions.down(+value);
      break;
    case 'mouse_left':
      await mouseActions.left(+value);
      break;
    case 'mouse_right':
      await mouseActions.right(+value);
      break;
    case 'mouse_position':
      const position = await mouseActions.getPosition();
      result = `mouse_position ${position.x},${position.y}`
      break;
    }

    return result ?? action;
  }
 
  if (command.startsWith('draw')) {
    return 'draw';
  }
  if (command.startsWith('prnt')) {
    return 'prnt';
  }

  return 'error';
}
