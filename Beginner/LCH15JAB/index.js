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
      var string = arr.shift();
      var alphabets = new Array(26).fill(0);
      for (var j = 0; j < string.length; j++) {
        var charOccur = string.split(`${string[j]}`).length - 1;
        alphabets[string[j].charCodeAt() - 97] = charOccur;
      }
      var max = Math.max(...alphabets);
      var others = alphabets.reduce(getSum) - max;
      max === others ? console.log('YES') : console.log('NO');
    }
});
function getSum(a,b) {
  return a + b;
}
