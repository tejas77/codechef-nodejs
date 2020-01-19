process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = arr.shift();
    for (var i = 0; i < t; i++) {
	    var n = arr.shift();
      let a = arr.shift().split(' ');
      let ans = new Array(n);
      ans[n-1] = 1;
      for (var j = n-1; j >= 0; j--) {
        if ((a[j] > 0 && a[j+1] < 0 ) || (a[j+1] > 0 && a[j] < 0 )) {
          ans[j] = 1 + ans[j+1];
        } else {
          ans[j] = 1;
        }
      }
      console.log(ans.join(' '));
    }
});
