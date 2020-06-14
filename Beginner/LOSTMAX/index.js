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
      let boxes = arr.shift().split(' ').map(Number);
      let n = [], nrem = false;
      for (var i = 0; i < boxes.length; i++) {
        (!nrem) ? (boxes[i] === boxes.length-1) ? nrem = true : n.push(boxes[i]) : n.push(boxes[i]);
      }
      console.log(Math.max(...n));
    }
});
