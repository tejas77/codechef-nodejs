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
      var n = Number(arr.shift());
      const s = arr.shift().split(' ').map(Number).sort((a,b) => Number(b) - Number(a));
      let j = 0,count=0,max=[];
      while (j < n-1) {
        if (s[j] === s[j+1]) {
          j++;
          count++;
          max.push(s[j]);
        }
        if (count === 2) {
          break;
        }
        j++;
      }
      count < 2 ? console.log(-1) : console.log(max[0]*max[1]);
    }
});
