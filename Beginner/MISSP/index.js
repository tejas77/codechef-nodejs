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
      var n = parseInt(arr.shift());
      var dollarr = [];
      for (var j = 0; j < n; j++) {
        var dtype = Number(arr.shift());
        if (dollarr.indexOf(dtype) === -1) {
          dollarr.push(dtype);
        } else {
          var index = dollarr.indexOf(dtype);
          dollarr.splice(index,1);
        }
      }
      var miss = dollarr[0];
      console.log(miss);
    }
});
