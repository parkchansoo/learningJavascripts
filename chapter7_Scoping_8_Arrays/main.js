// hoisting?
x;              //x is undefined (but it declared)
var x = 8;


// function hoisting
f();
function f() { return "f is hoisted" }

// function with let declaration not hoisted
// f2();
let f2 = function () {
    return "f2 is not hoisted";
};

const arr1 = [1, 2, 3];
arr1.push(4);       // 4, arr1 = [1, 2, 3, 4]
arr1.pop();         // 4, arr1 = [1, 2, 3]
arr1.unshift(0);    // 0, arr1 = [0, 1, 2, 3]
arr1.shift();       // 0, arr1 = [1, 2, 3]

// concat don't change original
arr1.concat(4, [5, 6]);     // [1, 2, 3, 4, 5, 6] arr1 = [1, 2, 3]
                            // original array don't changes
const arr2 =
arr1.concat([4, [5, 6]]);   // [1, 2, 3, 4, [5, 6]] arr1 = [1, 2, 3]

//slice don't changes original array
arr2.slice(-2);     // [4, [5, 6]] get last two elements
arr2.slice(1, -2);  // [1, 2, 3]
arr2.slice(-2, -1); // [4] 뒤에서 두번째.

// splice changes original arr
const arr3 = [1, 5, 7];
const arr3_2 = ['a', 'a', 'r'];
// splice(edit idx, numbers of delete, ...adding elements)
arr3.splice(1, 0, 2, 3, 4);     // [] arr = [1, 2, 3, 4, 5, 7]
arr3.splice(1, 2, 'a', 'b');    // [2, 3], arr = [1, 'a', 'b', 4, 5, 7]
arr3.splice(1, 2,...arr3_2);    // ['a', 'b'], arr3 = [1, 'a', 'a', 'r', 4, 5, 7]

// map, filter, reduce
// map
const cart = [
    {name: "widget", price: 9.95},
    {name: "gadget", price: 22.95},
];
const names = cart.map(o => o.name);
console.log(names);
const discount = [
    {percent: 0.5},
    {percent: 0.7},
];
const discountedPrice = cart.map((x, i) => x.price * discount[i]["percent"]);
console.log(discountedPrice);

// reduce
// reduce() >> get a: accumulator, and x: items. each returns get into acculuator.
            // also we give start value for accumulator.
const arr_sum = [1, 2, 3, 4, 5];
let sum = arr_sum.reduce((a, x) => a + x, 0);
let sum2 = arr_sum.reduce((a, x) => a += x);
console.log("sum1 is " + sum + ", and sum2 is " + sum2);
// reduce application
const words = [
    'baseketball', 'soccer', 'golf', 'beachball', 'baseball', 'swimming'
];
const dictions = words.reduce((a, x) => {
    if(!a[x[0]]) a[x[0]] = []; // if there is no 'b' key-word in a. we construct.
    a[x[0]].push(x);
    return a;
    }, []
);
console.log(dictions);