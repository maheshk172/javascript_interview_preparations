// // var
// for(var i=0; i<10; i++) {
//     console.log(i);
// }
// console.log(`outside the loop i: ${i}`);

// // let
// for(let j=0; j<10; j++) {
//     console.log(j);
// }
// console.log(`outside the loop j: ${j}`);

let a = 1;
var b = 1;

function doSomething() {
    let a = 2;
    var b = 2;
    console.log(a);
    console.log(b);
}

doSomething();
console.log(a);
console.log(b);

console.log(this);




