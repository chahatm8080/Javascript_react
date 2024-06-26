const http =require('http')
const websocketImport = require('websockets').Server;

const server = http.createServer((req,res)=>
{
  console.log("we have received a request");

});
httpServer.listen(8080,()=>
console.log('Http server running on port 8080'));
const websocket = new websocketImport({
  "httpServer":server,
});

websocket.on('request',(request)=> {
  connection = request.accept(null,request.origin);
connection.on('open',()=> console.log('Websocket connection is on !!!'));
connection.on('close',()=> console.log('Websocket connection is closed!!!'));

connection.on('message',(message)=>
console.log(`Received a message: ${message}`));

connection.send(`Confirmation for received message:${message}`);
});


