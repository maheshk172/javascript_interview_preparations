var maxTime = 1000;

let evenDoubler = function(input, callback) {
    let err = undefined;
    let result = 0;
    let time = Math.random(maxTime);

    if(input % 2 === 0) {
        result = input * 2;
    } else {
        err = 'Input Number is Odd, cant double it';
    }

    callback(err, result, time);
}

var handleResult = function(err, result, time) {
    if(err) {
        console.err('Error thrown: ' + err);
    } else {
        console.log('The Results are : ' + result + `( ${time} ms)`  );
    }
}

evenDoubler(100, handleResult);
console.log('Finished Executing...............');