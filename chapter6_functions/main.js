// object can get function as one object!
// follow example is how
const objWithFunc = {
    name: "user1",
    f1: function () { return "f1 is called" },
    f2()            { return "f2 is called" },
};

// using "this" examples
// it shows how 'this' is working
const obj_this = {
    name: "testing this",
    f1() { return "f1 calls..." + this.name },
    f1_2() { return `f1 calls...${this.name}` },
    // this was bind on
    f2() {
        function thisCall() {
            let reversedName = "";
            for (let i = this.name.length - 1; i >= 0; i--) {
                reversedName += this.name[i];
            }
            return reversedName;
        }
        return thisCall();
    },
    f3() {
        const thisCall = () => {
            let reversedName = "";
            for (let i = this.name.length - 1; i >= 0; i--) {
                reversedName += this.name[i];
            }
            return reversedName;
        };
        return `f3 calls this with arrow function: ${thisCall()}`;
    }
};

// this, call,
const target_objA = {
    name: "objA"
};
const target_objB = {
    name: "objB"
};

// the function greeting is not on obj!
function greeting() {
    return `Hello, ${this.name}`;
}
greeting(); // Hello, undefined!
greeting.call(target_objA); // Hello, objA!

function introduce(birthYear) {
    return `Hello, I'm ${this.name}, born at ${birthYear}!`;
}
introduce.call(target_objB, 1992); // "Hello, I'm objA, born at 1999!": got this first and got other parameters.


// call, apply, bind
// they are similar but different
const objThree = {
    name: "objThree",
    birth: 1993,
    height: 182,
    speak() {
        return `name: ${this.name}, birth: ${this.birth}, height: ${this.height}`;
    }
};
// helper function to understand
function update(birth, height) {
    this.birth = birth;
    this.height = height;
    return this.speak();
}
update.call(objThree, 12, 12);          // "name: objThree, birth: 12, height: 12"
update.apply(objThree, [12, 12]);       // "name: objThree, birth: 12, height: 12"
update.apply(objThree, [12, 12, 13]);   // "name: objThree, birth: 12, height: 12" >> other array item is just wasted
const inputTwo = [13, 13];
update.call(objThree, ...inputTwo);     // same with apply(objThree, inputTwo)

let updateObjThree = update.bind(objThree);
updateObjThree(15, 15);
let updateObj3with1993 = update.bind(objThree, 1993);




// summary plus) chapter5. using short circuit.
importedVal = importedVal || [];    // OR operator gets true-like value or false-like value.
                                    // if OR get true-liked value first(=== importedVal is not undefined) then get own value

// about destructuring assignment
const obj = {
    a: 14,
    b: 19,
    c: "hello",
}
let {a, b, c} = obj; // OK. a, b, c will get own values
{a, b, c} = obj; // ERROR. {} interpret as block statement!
({a, b, c} = obj); // OK.

[a, b, d] = [1, 2, 3]; //OK.