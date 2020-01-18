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
      const [n,m] = arr[s*2].split(' ').map(Number);
      let nArray = [...Array(n).keys()].map(i => i+1);
      const completedTask = arr[s*2+1].split(' ').map(Number).sort((a,b) => a - b);
      const chefTask = [];
      const asstTask = [];
      var j = 0;
      for (var k = 1; k <= n; k++) {
          if (k === completedTask[0]) {
              completedTask.shift();
              continue;
          }
          if (j%2 === 0) {
              chefTask.push(k);
          } else {
              asstTask.push(k);
          }
          j++;
      }
      // console.log({nArray,chefTask,asstTask});
      console.log(chefTask.join(' '));
      console.log(asstTask.join(' '));
    }
});
