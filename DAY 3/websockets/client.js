const websocketClient = require('websockets').client;

const websocket = new websocketClient();
let ws = new websocket.connect('ws://localhost:8080');


websocket.on('connect',(connection)=> {
  connection = request.accept(null,request.origin);
connection.on('error',()=> console.log('Websocket error !!!'));
connection.on('close',()=> console.log('Websocket connection is closed!!!'));

connection.on('message',(message)=>
console.log(`Received a message: ${message}`));

connection.send(`Confirmation for received message:${message}`);
});