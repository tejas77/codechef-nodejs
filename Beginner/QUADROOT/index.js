process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let a = Number(arr.shift());
    let b = Number(arr.shift());
    let c = Number(arr.shift());
    const root = Math.sqrt(Math.pow(b,2) - (4*a*c));
    const x1 = (-b+root)/(2*a);
    const x2 = (-b-root)/(2*a);
    console.log(x1);
    console.log(x2);
});
