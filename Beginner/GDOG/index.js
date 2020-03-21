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
      var vals = arr.shift().split(' ').map(Number);
      var n = vals[0];
      var k = vals[1];
      var max = 0;
      for(var j = 1; j <= k; j++){
          var left = n % j;
          if(left > max){
              max = left;
          }
      }
      console.log(max);
    }
});
