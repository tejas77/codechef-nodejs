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
      let n = Number(arr[s]);
      let m = n%26, q = Math.ceil(n/26) - 1;
      let value = parseInt(Math.pow(2, q));
      if (m===1 || m===2){
        console.log(`${value} 0 0`);
      } else if (m>2 && m<11) {
        console.log(`0 ${value} 0`);
      } else {
        console.log(`0 0 ${value}`);
      }
    }
});
