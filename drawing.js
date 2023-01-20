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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    let change = 0,
half = n/2,
page = 0;

n % 2 == 0 ? half = (n/2).toFixed(0) : half = ((n/2)-1).toFixed(0);

if ( p <= half ) {
    for ( page = 0; page <= n; page += 2 ) {
        if ( page < p && page+1 < p) {
            change++;
        }
    }
    return(change);
} else {
    n % 2 == 0 ? page = n : page = n-1;
    for ( page; page >= 0; page -= 2 ) {
        if ( page > p && page+1 > p) {
            change++;
        }
    }
    return(change);
}
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
