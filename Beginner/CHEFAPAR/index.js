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
      const paymentArray = arr[s*2+1].split(' ');
      let totalAmount = 0;
      for (var i = 0; i < n; i++) {
        if (paymentArray[i] === '1') {
          totalAmount = totalAmount === 0 ? totalAmount : totalAmount + 100;
        } else {
          totalAmount += 1100;
        }
      }
      console.log(totalAmount);
    }
});
