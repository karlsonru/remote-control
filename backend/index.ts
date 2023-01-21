import WebSocket, { WebSocketServer } from 'ws';
import { router } from './router.js';

const wss = new WebSocketServer({ port: 8080 });

wss.on('open', () => {
  console.log('Open!');
});

wss.on('connection', (sock, req) => {
  console.log('connected!');
  
  sock.on('message', async (data) => {    
    const command = data.toString();

    console.log(command);

    const response = await router(command);
    sock.send(response);
  });

  sock.on('error', () => {
    console.error('error occured');
  });    

});

