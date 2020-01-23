process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = arr.shift();
    let sumprodarr = 0;
    for (var i = 0; i < t; i++) {
      var n = parseInt(arr.shift());
      var array = arr.shift().split(' ').map(Number);
      for (var j = n; j > 0; j--) {
        for (var k = 0; k + j <= n; k++) {
          const subarray = array.slice(k,j+k);
          if (sumprod(subarray)) {
            sumprodarr++;
          }
        }
      }
      console.log(sumprodarr);
      sumprodarr = 0;
    }
});


function sumprod (array) {
  var sum = array.reduce((a,b) => a + b);
  var prod = array.reduce((a,b) => a * b);
  return sum === prod;
}
