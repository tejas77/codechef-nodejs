process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

let valueables = 0;
let jewels = '';
const checkStone = stone => jewels.includes(stone) ? valueables++ : null;
process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    loop: for (let s = 0; s < t; s++) {
      jewels = arr[s*2];
      let stones = arr[s*2+1].split('');
      stones.forEach(checkStone);
      console.log(valueables);
      valueables = 0;
    }
});
