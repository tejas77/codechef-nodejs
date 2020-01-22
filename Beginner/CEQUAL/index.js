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
      const nArray = arr[s*2+1].split(' ').map(Number);
      if (nArray.length === [...(new Set(nArray))].length) {
        console.log('No');
      } else {
        console.log('Yes');
      }

    }
});
