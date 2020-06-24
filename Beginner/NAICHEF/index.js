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
      const [n,a,b] = arr[s*2].split(' ').map(Number);
      const nArray = arr[s*2+1].split(' ').map(Number);
      let faceFreq = [];
      for (var i = 0; i < n; i++) {
        if (faceFreq[nArray[i]]) {
          faceFreq[nArray[i]]++;
        } else {
          faceFreq[nArray[i]] = 1;
        }
      }
      if (!faceFreq[a]) {
        faceFreq[a] = 0;
      }
      if (!faceFreq[b]) {
        faceFreq[b] = 0;
      }
      console.log(((faceFreq[a]/n)*(faceFreq[b]/n)).toFixed(10));
    }
});
