process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    loop: for (let s = 0; s < t; s++) {
      const [n,day] = arr[s].split(' ');
      const fday = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"].indexOf(day);
      const ndays = new Array(7).fill(0);
      for (var i = 0; i < n; i++) {
        ndays[(i+fday)%7]++;
      }
      console.log(ndays.join(' '));
    }
});
