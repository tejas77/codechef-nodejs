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
      let nStr = arr[s];
      let n = nStr.length;
      let resPrice = [];
      for (var i = 0; i < n; i++) {
        let rPrice = nStr.slice(0,i)+nStr.slice(i+1,n);
        resPrice.push(rPrice);
      }
      console.log(Math.min(...resPrice));
    }
});
