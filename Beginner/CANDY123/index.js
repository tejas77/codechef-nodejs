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
      const lb = arr.shift().split(' ').map(Number);
      const lm = lb[0];
      const bm = lb[1];
      let tlm = lm, tbm = bm, nlm = 0, nbm = 1;
      while (tlm >= (nlm * 2 + 1)) {
        tlm -= (nlm * 2 + 1);
        nlm++;
      }
      while (tbm >= (nbm * 2)) {
        tbm -= (nbm * 2);
        nbm++;
      }
      nbm--;
      console.log(nlm > nbm ? 'Limak': 'Bob');
    }
});
