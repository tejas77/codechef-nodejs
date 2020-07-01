process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    loop: for (let s = 0; s < t; s++) {
      deno = 1 + '0'.repeat( Math.floor( arr[s] / 2 ) );
      console.log(`1 ${deno}`);
    }
});
