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
      const fingerL = arr[s*3+1].split(' ');
      const sheathL = arr[s*3+2].split(' ');
      let front = true, back = true;
      for (var i = 0; i < n; i++) {
        if (fingerL[i] > sheathL[i]) {
          front = false;
        }
        if (fingerL[i] > sheathL[n-1-i]) {
          back = false;
        }
      }
      console.log(front && back ? 'both' : front ? 'front' : back ? 'back' : 'none');
    }
});
