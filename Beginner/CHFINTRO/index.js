process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let [t,r] = arr.shift().split(' ').map(Number);
    loop: for (let s = 0; s < t; s++) {
      console.log(+arr[s] >= r ? 'Good boi' : 'Bad boi');
    }
});
