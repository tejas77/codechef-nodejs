process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
  arr = arr.split('\n');
  var t = arr.shift();
  loop: for (var i = 0; i < t; i++) {
    const sn = Number(arr.shift());
    const seq = arr.shift().split(' ');
    const fn = Number(arr.shift());
    const fseq = arr.shift().split(' ');
    if (fn > sn) {
      console.log('No');
      continue loop;
    }

    let k = 0;
    for (var j = 0; j < sn; j++) {
      if (seq[j] === fseq[k]) {
        k++;
      }
    }
    k === fn ? console.log('Yes') : console.log('No');
  }
});
