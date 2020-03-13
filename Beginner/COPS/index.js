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
      var houses = new Array(100);
      houses.fill(true);
      var values = arr.shift().split(' ').map(Number);
      let copHouses = values.shift();
      let speed = values.shift();
      let min = values.shift();
      var cops = arr.shift().split(' ').map(Number);
      for (var j = 0; j < copHouses; j++) {
        var pos = cops[j]-1;
        houses[pos] = false;
        let maxCheck = pos + (speed*min), k = 0;
        maxCheck = maxCheck > 100 ? maxCheck - maxCheck % 100 : maxCheck;
        let minCheck = pos - (speed*min);
        minCheck = minCheck < 0 ? 0 : minCheck;
        for (k = pos+1; k <= maxCheck; k++) {
          houses[k] = false;
        }
        for (k = pos-1; k >= minCheck; k--) {
          houses[k] = false;
        }
      }
      var safe = houses.join().split(true);
      console.log(safe.length-1);
    }
});
