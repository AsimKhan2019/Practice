'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    // Write your code here
    let distances = [];
    var current = 0;
    var flag = false;
    
    for(let i = 0; i < a.length; i++){
        if(a.indexOf(a[i],i+1) != -1){
            
            current = a.indexOf(a[i],i+1) - i;
            //console.log(current);
            distances.push(current);
            flag = true;
        }
    }
    
    if(flag == false){
        return -1;
    }
    //console.log(distances);
    var min = Math.min(...distances);
    //console.log(Math.min(value1,value2));
    return min;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = minimumDistances(a);

    ws.write(result + '\n');

    ws.end();
}
