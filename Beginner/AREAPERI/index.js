process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
  arr = arr.split('\n');
  const l = Number(arr.shift());
  const b = Number(arr.shift());
  (l*b) > 2*(l+b) ? console.log('Area') : (l*b) < 2*(l+b) ? console.log('Peri') : console.log('Eq');
  (l*b) > 2*(l+b) ? console.log(l*b) : (l*b) < 2*(l+b) ? console.log(2*(l+b)) : console.log(l*b);
});
