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
      const n = Number(arr[s*2]);
      const nArray = arr[s*2+1].split(' ').map(Number).sort((a,b) => a - b);
      let sLimit = parseInt(n/4);
      let x = sLimit, y = (sLimit*2), z = (sLimit*3);
      if (nArray.filter(val => val < nArray[x]).length !== sLimit ||
      nArray.filter(val => val >= nArray[x] && val < nArray[y]).length !== sLimit ||
      nArray.filter(val => val >= nArray[y] && val < nArray[z]).length !== sLimit ||
      nArray.filter(val => val >= nArray[z]).length !== sLimit) {
        console.log('-1');
        continue loop;
      }
      console.log(`${nArray[x]} ${nArray[y]} ${nArray[z]}`);
    }
});
