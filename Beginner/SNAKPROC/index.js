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
      let n = Number(arr.shift());
      let report = Boolean(!arr.shift().split('').filter(val => val !== '.').join('').split('HT').filter(val => val!=='').length);
      report ? console.log('Valid') : console.log('Invalid');
    }
});
