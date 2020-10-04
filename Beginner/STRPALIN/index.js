process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    loop: for (var i = 0; i < t; i++) {
      const a = arr.shift();
      const b = arr.shift().split("").reverse().join("");
      for (var j = 0; j < a.length; j++) {
        for (var k = 0; j+k <= a.length; k++) {
          const suba = a.substring(j,j+k);
          if (b.includes(suba) && suba !== '') {
            console.log('Yes');
            continue loop;
          }
        }
      }
      console.log('No');
    }
});
