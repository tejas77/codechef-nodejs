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
      var str1 = arr.shift().split('');
      var str2 = arr.shift().split('');
      let min = 0, max = 0;
      for (var j = 0; j < str1.length; j++) {
        if (str1[j] !== '?' && str2[j] !== '?' && str1[j] !== str2[j]) {
          min++;
          max++;
        }
        if (str1[j] === '?' && str2[j] === '?') {
          max++;
        } else if (str1[j] === '?' || str2[j] === '?') {
          max++;
        }
      }
      console.log(min, max);
    }
});
