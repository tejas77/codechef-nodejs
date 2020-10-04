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
      let sm = arr.shift();
      let sCount = sm.split('').filter(val => val === 's').length;
      let mCount = sm.split('').filter(val => val === 'm').length;
      for (let i = 0; i < sm.length-1; i++) {
        if (sm[i] !== sm[i+1]) {
          sCount--;
          i++;
        }
      }
      console.log(mCount > sCount ? 'mongooses' : mCount < sCount ? 'snakes' : 'tie');
    }
});
