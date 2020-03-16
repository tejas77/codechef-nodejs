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
      let d = new Date(arr.shift());
      let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      console.log(days[d.getDay()]);
    }
});
