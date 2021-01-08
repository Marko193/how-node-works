//Event emiters & event listeners
//.on - listening for an event

const EventEmitter =  require("events");
const http = require("http");

class Sales extends EventEmitter{
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

//observer pattern
myEmitter.on("newSale", ()=>{
    console.log('There was a new sale!');
});

myEmitter.on("newSale", ()=>{
    console.log('There was another sale!');
});

//pick up 9 as second arg
myEmitter.on("newSale", stock =>{
    console.log(`There are now ${stock} items left!`);
});

myEmitter.emit("newSale", 9);

//////////////////////////////
//Create a server 

const server = http.createServer();

server.on('request', (req, res) =>{
    console.log("Request received!");
    console.log(req.url);
    res.end("Request received!");
});

server.on('request', (req, res) =>{
    console.log("Another request!");
});

server.on('close', ()=>{
    console.log('Server closed!');
});

//start the server
//it won`t close - event loop is waiting for an incoming I/O
server.listen(8000, '127.0.0.1', ()=>{
    console.log('Waiting for requests...');
});