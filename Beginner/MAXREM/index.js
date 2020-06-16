process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let n = Number(arr.shift());
    const nArray = arr[0].split(' ').map(Number).sort((a,b) => a - b);
    console.log(nArray[n-2]%nArray[n-1]);
});
