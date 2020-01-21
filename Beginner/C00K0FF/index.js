process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    const diffs = ["cakewalk", "simple", "easy", "easy-medium", "medium", "medium-hard", "hard"];
    let shift = 0;
    loop: for (let s = 0; s < t; s++) {
      const n = Number(arr[shift]);
      let diffsT = new Array(7).fill(false);
      for (var i = 1; i <= n; i++) {
        const difficulty = arr[shift+i];
        diffsT[diffs.indexOf(difficulty)] = true;
      }
      console.log(diffsT[0] && diffsT[1] && diffsT[2] && (diffsT[3] || diffsT[4]) && (diffsT[5] || diffsT[6]) ?
        'Yes' : 'No');
      shift += n+1;
    }
});
