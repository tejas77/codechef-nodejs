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
      let testC = arr[s].split(' ').map(Number);
      let childs = testC.slice(0,3);
      let coins = testC.slice(3,6);
      if ((childs[0] < childs[1] && coins[0] >= coins[1]) ||
        (childs[0] < childs[2] && coins[0] >= coins[2]) ||
        (childs[1] < childs[2] && coins[1] >= coins[2]) ||
        (childs[0] > childs[1] && coins[0] <= coins[1]) ||
        (childs[0] > childs[2] && coins[0] <= coins[2]) ||
        (childs[1] > childs[2] && coins[1] <= coins[2]) ||
        (childs[0] === childs[1] && coins[0] !== coins[1]) ||
        (childs[0] === childs[2] && coins[0] !== coins[2]) ||
        (childs[1] === childs[2] && coins[1] !== coins[2])
      ) {
          console.log('NOT FAIR');
      } else {
          console.log('FAIR');
      }
    }
});
