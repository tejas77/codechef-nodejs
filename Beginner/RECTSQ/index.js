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
      var l = values[0];
      var b = values[1];
      var h = values.reduce(HCF);
      console.log((l/h)*(b/h));
    }
});

var HCF = (a, b) => {
    if (b) {
        return HCF(b, a % b);
    } else {
        return Math.abs(a);
    }
};
