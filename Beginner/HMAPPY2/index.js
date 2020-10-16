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
      const [n,a,b,k] = arr[s].trim().split(' ').map(Number);
      let x = parseInt(n / a);
      let y = parseInt(n / b);
      let z = parseInt(n / lcm(a, b));
      console.log((x + y - (2 * z)) >= k ? 'Win' : 'Lose');
    }
});

var gcd = function(a, b) {
  if (!b) return a;
  return gcd(b, a % b);
};

var lcm = function(a, b) {
  return Math.floor(a * b / gcd(a, b));
};
