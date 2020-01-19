process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    loop: for (var s = 0; s < t; s++) {
      let n = Number(arr.shift());
      let sn = n % 8;
      if (sn === 0 || sn === 7) {
        sn === 0 ? console.log(`${n-1}SL`): null;
        sn === 7 ? console.log(`${n+1}SU`): null;
        continue loop;
      } else if (sn === 1 || sn === 4) {
        sn === 1 ? console.log(`${n+3}LB`): null;
        sn === 4 ? console.log(`${n-3}LB`): null;
        continue loop;
      } else if (sn === 2 || sn === 5) {
        sn === 2 ? console.log(`${n+3}MB`): null;
        sn === 5 ? console.log(`${n-3}MB`): null;
        continue loop;
      } else if (sn === 3 || sn === 6) {
        sn === 3 ? console.log(`${n+3}UB`): null;
        sn === 6 ? console.log(`${n-3}UB`): null;
        continue loop;
      }
    }
});
