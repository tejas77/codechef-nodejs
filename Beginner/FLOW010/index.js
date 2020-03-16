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
      var ship = arr[i];
      ship === 'b' || ship === 'B' ? console.log('BattleShip') : null;
      ship === 'c' || ship === 'C' ? console.log('Cruiser') : null;
      ship === 'd' || ship === 'D' ? console.log('Destroyer') : null;
      ship === 'f' || ship === 'F' ? console.log('Frigate') : null;
    }
});
