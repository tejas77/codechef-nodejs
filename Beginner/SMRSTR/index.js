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
      const [n,q] = arr.shift().split(' ');
      const nArraySum = arr.shift().split(' ').reduce((a, b) => a * b);
      const qArray = arr.shift().split(' ');
      const ans = [];
      for (var i = 0; i < q; i++) {
        ans.push(Math.floor(qArray[i]/nArraySum));
      }
      console.log(ans.join(' '));
    }
});
