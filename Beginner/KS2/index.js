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
      let n = arr[s];
      let sum = n.split('').reduce(function(a,b){return +a + +b}, 0);
      let tenMinusSum = 10 - ((sum%10) || 10);
      console.log(n+tenMinusSum);
    }
});
