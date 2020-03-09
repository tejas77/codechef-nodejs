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
      let n = Number(arr.shift());
      const aliceM = arr.shift().split(' ').map(Number);
      const bobM = arr.shift().split(' ').map(Number);
      aliceM.splice(aliceM.indexOf(Math.max(...aliceM)), 1);
      bobM.splice(bobM.indexOf(Math.max(...bobM)), 1);
      const aliceT = aliceM.reduce((a,b) => a+b);
      const bobT = bobM.reduce((a,b) => a+b);
      aliceT > bobT ? console.log('Bob') : aliceT < bobT ? console.log('Alice') : console.log('Draw');
    }
});
