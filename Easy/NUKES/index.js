process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let [a,n,k] = arr[0].split(' ').map(Number);
    let chambers = '';
    while (k--) {
      chambers += `${a % (n + 1)} `;
      a = Math.floor(a / (n + 1));
    }
    console.log(chambers);
});
