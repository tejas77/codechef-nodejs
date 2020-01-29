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
      const [p1,p2,k] = arr[s].split(' ').map(Number);
      let servC = (p1+p2)/k;
      console.log(Math.floor(servC) % 2 === 0 ? 'CHEF' : 'COOK');
    }
});
