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
      const [n,a,k] = arr[s].split(' ').map(Number);
      let num = (a*n*(n-1))+((k-1)*(((n-2)*360)-(2*a*n)));
      let den=n*(n-1);
      let z = gcd(num,den);
      console.log(num/z, den/z);
    }
});

var gcd = function(a, b) {
  if (!b) return a;

  return gcd(b, a % b);
};
