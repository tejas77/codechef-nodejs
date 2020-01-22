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
    const n = Number(arr.shift());
    const pday = arr.shift().split(' ').map(Number);
    var freq = {};
    let savef = n;
    for (var j = 0; j < pday.length; j++) {
      let char = pday[j];
      if (freq[char]) {
         savef--;
      } else {
         freq[char] = 1;
      }
    }
    console.log(savef);
  }
});
