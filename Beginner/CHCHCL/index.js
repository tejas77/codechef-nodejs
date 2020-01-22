process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    loop: for (var s = 0; s < t; s++) {
      let [n,m] = arr.shift().split(' ').map(Number);
      var res = '';
      n%2 !== 0 ? res = m%2 === 0 ? 'Yes' : 'No': res = 'Yes';
      console.log(res);
    }
});
