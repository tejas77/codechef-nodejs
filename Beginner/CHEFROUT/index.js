process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    const order = ['C', 'E', 'S'];
    loop: for (let s = 0; s < t; s++) {
      const n = arr[s];
      let res = true;
      for (var i = 0; i < n.length-1; i++) {
        if (order.indexOf(n[i+1]) < order.indexOf(n[i]) ) {
            console.log('no');
            continue loop;
        }
      }
      console.log('yes');
    }
});
