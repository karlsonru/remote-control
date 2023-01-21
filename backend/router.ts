import { MouseNavigation } from './navigationActions.js';

const mouse = new MouseNavigation();

export async function router(command: string) {
  if (command.startsWith('mouse')) {
    const [action, value] = command.split(' ');

    if (action === 'mouse_position') {
      const result = await mouse[action]();
      console.log(`mouse_position ${result.x},${result.y}`);
      return `mouse_position ${result.x},${result.y}`;
    }

    // @ts-ignore
    mouse[action](+value);
    return null;
  }    
  
  if (command.startsWith('draw')) {
    return 'draw';
  }
  if (command.startsWith('prnt')) {
    return 'draw';
  }

  return null;
}
