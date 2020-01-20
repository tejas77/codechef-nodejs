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
      const [strength,w1,w2,w3] = arr[s].split(' ').map(Number);
      let brickst = [w1,w2,w3];
      let hit=0
      let ind1=0
      while (ind1 <= 2) {
        let sum = 0;
        while (ind1<=2 && sum+brickst[ind1]<=strength) {
          sum += brickst[ind1];
          ind1++;
        }
        hit++;
      }
      console.log(hit);
    }
});
