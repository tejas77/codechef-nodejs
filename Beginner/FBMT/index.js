process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    let shift = 0;
    loop: for (let s = 0; s < t; s++) {
      const n = Number(arr[shift]);
      let scores = [], teams = [];
      for (var i = 1; i <= n; i++) {
        const team = arr[shift+i];
        if (scores[team]) {
          scores[team]++;
        } else {
          scores[team] = 1;
          teams.push(team);
        }
      }
      if (n === 0) {
        console.log('Draw');
      } else if (n === 1) {
        console.log(teams[0]);
      } else {
        console.log(scores[teams[0]] === scores[teams[1]] ? 'Draw':
          scores[teams[0]] > scores[teams[1]] ? teams[0] : teams[1]);
      }

      shift += n+1;
    }
});
