process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    const syears = [2010, 2015, 2016, 2017, 2019];
    loop: for (var i = 0; i < t; i++) {
      syears.indexOf(Number(arr.shift())) === -1 ? console.log('NOT HOSTED') : console.log('HOSTED');
    }
});
