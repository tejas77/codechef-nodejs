process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = arr.shift();
    for (var x = 0; x < t; x++) {
      var number = arr[x].split('').map(Number);
      let i = 0, j = number.length-1;
      let isPal = true;
      while (i <= j) {
        if (number[i] !== number[j]) {
          isPal = false;
          break;
        }
        i++;
        j--;
      }
      isPal ? console.log('wins') : console.log('losses');
    }
});
