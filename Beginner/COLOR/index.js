process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
  arr = arr.split('\n');
  var t = arr.shift();
  loop: for (var i = 0; i < t; i++) {
    const n = Number(arr.shift());
    const roomc = arr.shift().split('');
    const r = roomc.filter(val => val ==='R').length;
    const g = roomc.filter(val => val ==='G').length;
    const b = roomc.filter(val => val ==='B').length;
    const mrooms = r >= g && r >= b ? r :
                    g >= r && g >= b ? g :
                      b >= r && b >= g ? b : null;
    console.log(n-mrooms);
  }
});
