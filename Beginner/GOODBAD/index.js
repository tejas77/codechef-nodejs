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
      let [n,k] = arr.shift().split(' ').map(Number);
      const message = arr.shift().split('');
      const lCase = message.filter(val => val === val.toLowerCase()).length;
      const uCase = message.filter(val => val === val.toUpperCase()).length;
      console.log(lCase <= k && uCase <= k ? 'both' : uCase <= k ? 'chef' : lCase <= k ? 'brother' : 'none');
    }
});
