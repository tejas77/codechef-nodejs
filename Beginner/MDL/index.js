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
      // const n = Number(arr[s*2]);
      const nArray = arr[s*2+1].split(' ').map(Number);
      const max = Math.max(...nArray), min = Math.min(...nArray);
      const maxFirst = nArray.indexOf(max) < nArray.indexOf(min);
      console.log(maxFirst ? `${max} ${min}`: `${min} ${max}`);
    }
});
