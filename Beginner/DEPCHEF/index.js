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
      const n = Number(arr[s*3]);
      const attArray = arr[s*3+1].split(' ').map(Number);
      const defArray = arr[s*3+2].split(' ').map(Number);
      let shield = -1;
      for (var i = 0; i < n; i++) {
        const lSol = i === 0 ? n-1 : i-1;
        const rSol = i === n-1 ? 0 : i+1;
        const totalAtt = attArray[lSol] + attArray[rSol];
        if (totalAtt < defArray[i]) {
          shield = shield <= defArray[i] ? defArray[i]: shield;
        }
      }
      console.log(shield);
    }
});
