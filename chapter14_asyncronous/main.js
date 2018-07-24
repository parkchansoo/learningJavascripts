// what is call back?
// >> asynchronous method, to call function after function

const start = new Date();
let i = 0;
const intervalId = setInterval( function () {
    let now = new Date();
    if(now.getMinutes() !== start.getMinutes() || ++i > 5)
        return clearInterval(intervalId);
    console.log(`${i}: ${now}`);
}, 5000);

// there is some patterns in callback
// 1. error-first callback
const fs = require('fs'); //built into Node.js to load modules

const fname =  'aaa.txt';
fs.readFile(fname, function(err, data) {
    if(err) return console.error(`error reading file ${fname}: ${err.message}`);
    // console.error raise error ans end up
    // if you don't use this, it's same with preserve error by callback. we don't need to.
    console.log(`${fname} contents: ${data}`);
});


