process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.trim().split('\n');
    let t = Number(arr.shift());
    let check = /101|010/;
    loop: for (let s = 0; s < t; s++) {
      const str = arr[s];
      console.log(check.test(str) ? 'Good' : 'Bad');
    }
});
