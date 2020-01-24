process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let n = Number(arr.shift());
    const fees = arr[0].split(' ').map(Number);
    const tWorker = arr[1].split(' ');
    let trans = [], auth = [], both = [];
    for (let i = 0; i < n; i++) {
      if (tWorker[i] === '1') {
        trans.push(fees[i]);
      } else if (tWorker[i] === '2') {
        auth.push(fees[i]);
      } else {
        both.push(fees[i]);
      }
    }
    let taf = false, lBoth = Math.min(...both);
    if (trans.length && auth.length) {
      taf = Math.min(...trans) + Math.min(...auth);
    }
    console.log(!taf ? lBoth : taf < lBoth ? taf : lBoth);
});
