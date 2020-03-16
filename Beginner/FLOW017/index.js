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
      var numarr = arr[i].split(' ');
      let sec;
      var first = parseInt(numarr[0]);
      var second = parseInt(numarr[1]);
      var third = parseInt(numarr[2]);
      if ((first > second && first < third) ||
          (first < second && first > third)) {
        sec = first;
      } else if ((second > first && second < third) ||
          (second < first && second > third)) {
          sec = second;
      } else if ((third > first && third < second) ||
          (third < first && third > second)) {
            sec = third;
      }
      console.log(sec);
    }
});
