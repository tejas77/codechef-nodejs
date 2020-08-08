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
      var ingredients = values.shift();
      var factor = values.reduce(HCF);
      console.log('factor: ', factor);
      for (var j = 0; j < values.length; j++) {
          values[j] /= factor;
      }
      console.log(values.join(' '));
    }
});

var HCF = (a, b) => {
    if (b) {
        return HCF(b, a % b);
    } else {
        return Math.abs(a);
    }
}
