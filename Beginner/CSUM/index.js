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
      const [n,k] = arr[s*2].split(' ').map(Number);
      const nArray = arr[s*2+1].split(' ').map(Number);
      let temp = {}, found = false;
      temp[nArray[0]] = 1;
      for (let j = 1; j < n; j++) {
          const diff = k - nArray[j];
          if (temp[diff]) {
              console.log('Yes');
              found = true;
              break;
          }
          temp[nArray[j]] = 1;
      }

      if (!found) {
          console.log('No');
      }
    }
});
