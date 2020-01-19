process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
  arr = arr.split('\n');
  var s = arr.shift().split('');
  var alphabets = {};
  for (var i = 0; i < s.length; i++) {
    alphabets[s[i]] = 1;
  }
  const t = Number(arr.shift());
  loop: for (i = 0; i < t; i++) {
    const word = arr.shift().split('');
    for (var j = 0; j < word.length; j++) {
      let char = word[j];
      if (!alphabets[char]) {
         console.log('No');
         continue loop;
      }
    }
    console.log('Yes');
  }
});
