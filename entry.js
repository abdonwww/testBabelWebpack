require("!style!css!./style.css");

document.write(require("./content.js"));
import * as math from "./content2.js";

alert("2π = " + math.sum(math.pi, math.pi));

let promise = new Promise(function(resolve, reject) {
    console.log("Promise");
    // resolve();

    setTimeout(function() {
      resolve();
    }, 1000);
});

promise.then(function() {
    console.log("Resolved.");
});

console.log("Hi!");


let name = "Nicholas",
    message = `Hello, ${name}.`;

console.log(message);       // "Hello, Nicholas."

function passthru(literals, ...substitutions) {
    let result = "";

    // run the loop only for the substitution count
    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }

    // add the last literal
    result += literals[literals.length - 1];

    return result;
}


let count = 10,
    price = 0.25,
    message2 = passthru`${count} items cost $${(count * price).toFixed(2)}.`;

console.log(message2);       // "10 items cost $2.50."


// var funcs = [];
//
// for (let i=0; i < 10; i++) {
//     funcs.push(function() {
//         console.log(i);
//     });
// }
//
// funcs.forEach(function(func) {
//     func();     // outputs 0, then 1, then 2, up to 9
// })

var colors = [ "red", [ "green", "lightgreen" ], "blue" ];

// later

var [ firstColor, [ secondColor ] ] = colors;

console.log(firstColor);        // "red"
console.log(secondColor);       // "green"
