process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = parseInt(arr.shift());
    while (t !== 0) {
        let perm = arr.shift().split(' ').map(Number);
        let inv = new Array(perm.length-1);
        perm.forEach((num, k) => {
          inv[num-1] = k + 1;
        });
        if (perm.every((num, k) => inv[k] === num)) {
          console.log('ambiguous');
        } else {
          console.log('not ambiguous');
        }
        t = parseFloat(arr.shift());
    }
});
