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
      const [n,a,b,k] = arr[s].split(' ').map(Number);
      let least = check(a,b), count;
      if (least === a) {
        count = parseInt((n/b) - (n/a));
      } else if (least === b) {
        count = parseInt((n/a) - (n/b));
      } else {
        count = parseInt((n/a) + (n/b) - (2*(n/least)));
      }
      console.log(count >= k ? 'Win' : 'Lose');
    }
});

var check = (x, y) =>  {
  return !(y%x) ? y : !(x%y) ? x : (x*y);
};
