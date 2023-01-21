import WebSocket, { WebSocketServer } from 'ws';
import { router } from './router.js';

const wss = new WebSocketServer({ port: 8080 });

wss.on('open', () => {
  console.log('Open!');
});

wss.on('connection', (sock, req) => {
  console.log('connected!');
  
  sock.on('message', async (data) => {
    console.log('message received');

    const command = data.toString();
    console.log(command);
    const result = await router(command);

    if (result) {
      console.log(result);
      sock.send(result.toString());
    }

    sock.send(command);
  });

  sock.on('error', () => {
    console.error('error occured');
  });    

});

