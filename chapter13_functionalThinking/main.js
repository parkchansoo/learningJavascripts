// bad example for using asynchronous programming
/*
var i;
for(i = 5; i >= 0; i --) {
    setTimeout(function() {
        console.log(i === 0 ? "go!" : i);
    }, (5-i) * 1000);
}   // we might expect 5, 4, 3, 2, 1 go!
    // but the result is -1 -1 -1 -1 -1 -1 >> the IIFE works after for loop is done!
*/

// correct way to using...
// planA. using closure by declare new function
var i;
function loopBody(i) { // loopBody got 'i' and caught in the closure, not same value with 'i' in for loop
    setTimeout(() => {
        console.log(i === 0 ? "go!" : i);}
        , (5 - i) * 1000);
}
for(i = 5; i >= 0; i --) {
    loopBody(i);
}

//planB. using closure with IIFE >> our function actually don't need a name
var i;
for(i = 5; i >= 0; i --) {
    (function(i) {
        setTimeout(function() {
            console.log(i === 0 ? "go!" : i);
        }, (5 - i) * 500);
    })(i)
}

// planC. use 'let' declaration to copy each 'i' values
for(let i = 5; i >= 0; i --) {
    setTimeout(function() {
        console.log(i === 0 ? "go!" : i);
    }, (5 - i) * 1000);
}


//-- function can also get function!
// example: sum function(sun for x or x^2 or....)
function sum(arr, f) {
    if(typeof f !== 'function') f = x => x;

    return arr.reduce((a, x) => a += f(x), 0);
}

const arr = [1, 2, 3, 4];
console.log(
    sum(arr, 0)
);
console.log(
    sum(arr, x => x*x)
);