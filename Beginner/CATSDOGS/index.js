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
      const cdl = arr.shift().split(' ').map(Number);
      var c = cdl[0];
      var d = cdl[1];
      var l = cdl[2];
      var min;
      if(c > 2*d){
          min =  4*(c - d);
      } else{
          min = d*4;
      }

      if(l <= 4*(c+d) && l >= min && l%4 === 0){
          console.log("yes");
      }else{
          console.log("no");
      }
    }
});
