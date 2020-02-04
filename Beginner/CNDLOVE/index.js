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
      let np = Number(arr.shift());
      const candies = arr.shift().split(' ').map(Number).reduce((a,b) => a+b);
      console.log(candies&1 ? 'YES' : 'NO');
    }
});
