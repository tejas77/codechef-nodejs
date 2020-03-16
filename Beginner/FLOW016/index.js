process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = arr.shift();
    for (var i = 0; i < t; i++) {
      var values = arr[i].split(' ').map(Number);
      console.log(values.reduce(HCF), values.reduce(LCM));
    }
});

var HCF = (a, b) => {
    if (b) {
        return HCF(b, a % b);
    } else {
        return Math.abs(a);
    }
};

var LCM = (x, y) =>  {
  return (!x || !y) ? 0 : Math.abs((x * y) / HCF(x, y));
};
