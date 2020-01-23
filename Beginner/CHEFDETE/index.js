process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let n = Number(arr[0]);
    const nArray = arr[1].split(' ').map(Number);
    let s = new Set();
    nArray.forEach(val => s.add(val));
    let not = [];
    for(let i = 1; i <= n; i++){
        if(!s.has(i)){
            not.push(i);
        }
    }
    console.log(not.join(' '));
});
