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
      const nArray = arr[s*2+1].split(' ').map(Number);
      let oStr = '', i = 0;
      while (i < n) {
        let count = 0;
        oStr += nArray[i];
        while (nArray[i+1] === nArray[i]+1) {
          i++;
          count++;
        }
        if (count>=2) {
          oStr += `...${nArray[i]}`;
          i++;
        } else if (count === 0) {
          i++;
        } else {
          oStr += `,${nArray[i]}`;
          i++;
        }
        if (i<n) {
          oStr += ',';
        }
      }
      console.log(oStr);
    }
});
