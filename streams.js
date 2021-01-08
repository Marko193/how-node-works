const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req,res)=>{
    
    //Solution 1 - load the whole file into the memory
    //Bad solution - big file, lot req => run out of res
    /*
    fs.readFile('test-file.txt', (err, data)=>{
        if(err) console.log(err);
        res.end(data);
    });
    */

    /*
    //Solution 2 - streams
    //create a stream for this file
    //THE BACKPRESSURE problem - too slow sending response
    //while the the receiving is too fast
    const readable = fs.createReadStream('test-file.txt');
    readable.on('data', chunk =>{
        res.write(chunk);
        });

    //already sent all the data
    //with res.write, chunk bu chunk
    readable.on('end', ()=>{
        res.end();
    });

    //Error event - file not found
    readable.on('error', err =>{
        console.log(err);
        res.statusCode = 404;
        res.end('File not found!');
    })
    */

    //Solution 3
    //To avoid backpressure - use pipe()
    //available on all readable streams 
    //allows to pipe the output of a readable stream
    //right into the input pf a writable stream
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    //readableSource.pipe(writeableDest)
    
    readable.on('error', err =>{
        console.log(err);
        res.statusCode = 404;
        res.end('File not found!');
    
    });    
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('Waiting for requests...');
});