process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    loop: for (let s = 0; s < t; s++) {
      const tCard = arr[s*2];
      const bCard = arr[s*2+1];
      let bCount = 0, oCount = 0;
      for (var i = 0; i < 3; i++) {
        let tbo = tCard[i] === 'b' ? 'b' : tCard[i] === 'o' ? 'o' : false;
        let bbo = bCard[i] === 'b' ? 'b' : bCard[i] === 'o' ? 'o' : false;
        if (!tbo && !bbo) {
          console.log('no');
          continue loop;
        }
        if ((tbo === 'b' && bbo === 'o') || (tbo === 'o' && bbo === 'b')) {
          bCount++;
          oCount++;
        } else if (tbo === 'b' || bbo === 'b') {
          bCount++;
        } else if (tbo === 'o' || bbo === 'o') {
          oCount++;
        }
      }
      console.log(bCount >= 2 && oCount >= 1 ? 'yes' : 'no');
    }
});
