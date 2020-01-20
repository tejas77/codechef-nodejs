process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    let shift = 0;
    loop: for (let s = 0; s < t; s++) {
      const n = Number(arr[shift]);
      let loss = 0;
      for (var i = 1; i <= n; i++) {
        const [price,qty,disc] = arr[shift+i].split(' ').map(Number);
        const incP = (price+(price*(disc/100)));
        const disP = (incP-(incP*(disc/100)));
        loss += (qty*(price-disP));
      }
      console.log(loss.toFixed(8));
      shift += n+1;
    }
});
