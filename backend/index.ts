import WebSocket, { createWebSocketStream, WebSocketServer } from 'ws';
import { router } from './router.js';

const wss = new WebSocketServer({ port: 8080 });

wss.on('open', () => {
  console.log('Open!');
});

wss.on('connection', (sock, req) => {
  console.log('connected!');

  const stream = createWebSocketStream(sock, {
    encoding: 'utf8',
    decodeStrings: false,
  });
  
  stream.on('data', async (data) => {    
    stream.write(await router(data));
  });

  stream.on('error', () => {
    console.error('error occured');
  });    

});

