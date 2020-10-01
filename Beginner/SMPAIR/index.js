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
      let numbers = arr.shift().split(' ').map(Number);
      if (numbers.length <= 2){
        console.log(`${numbers[0]+numbers[1]}`);
        break;
      } else if (numbers.length <= 10) {
        var min1 = Math.min(...numbers);
        numbers = numbers.filter((num,i) => i !== numbers.indexOf(min1));
        var min2 = Math.min(...numbers);
        console.log(`${min1+min2}`);
      } else {
        numbers = numbers.sort(function(a, b){return a-b});
        console.log(`${numbers[0]+numbers[1]}`);
      }
    }
});
