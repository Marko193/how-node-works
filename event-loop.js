const fs = require ('fs'); 
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 3; //change the thread pool size to the set val

setTimeout(() => console.log("Timer one finished"), 0);     //timer NOT in callback - the SECOND one
setImmediate(() => console.log("Immediate 1 finished"));
process.nextTick(()=> console.log('Process.NextTick'));     //executed the first - in callbacks and promises

fs.readFile("test-file.txt", ()=>{

    console.log("I/O finished");
    console.log("------------");

    setTimeout(() => console.log("Timer 2 finished"), 0);       //timer in callback - the last one
    setTimeout(() => console.log("Timer 3 finished"), 3000);    //timer in callback - the last one
    setImmediate(() => console.log("Immediate 2 finished"));    //before timer

    process.nextTick(()=> console.log('Process.NextTick')); //executed the first - in callbacks and promises

    //password encryptions SYNC WAY
    //Will execute one by one - with event loop & thread pool
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log("----------------------------------------");
    console.log(Date.now() - start, "Password encrypted");
    console.log("----------------------------------------");

    //password encryptions SYNC WAY
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log("----------------------------------------");
    console.log(Date.now() - start, "Password encrypted");
    console.log("----------------------------------------");

    //password encryptions SYNC WAY
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log("----------------------------------------");
    console.log(Date.now() - start, "Password encrypted");
    console.log("----------------------------------------");

    //password encryptions SYNC WAY
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log("----------------------------------------");
    console.log(Date.now() - start, "Password encrypted");
    console.log("----------------------------------------");
    
        /*
    //password encryptions async way
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("----------------------------------------");
        console.log(Date.now() - start, "Password encrypted");
        console.log("----------------------------------------");
    });

          //password encryptions async way
      crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("----------------------------------------");
        console.log(Date.now() - start, "Password encrypted");
        console.log("----------------------------------------");
    });

          //password encryptions async way
      crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("----------------------------------------");
        console.log(Date.now() - start, "Password encrypted");
        console.log("----------------------------------------");
    });

          //password encryptions async way
      crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("----------------------------------------");
        console.log(Date.now() - start, "Password encrypted");
        console.log("----------------------------------------");
    });
    */
});

console.log("Hello from top-level code!"); //begin
console.log("--------------------------");