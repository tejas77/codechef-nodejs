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
      const [n,u,d] = arr[s*2].split(' ').map(Number);
      const hArray = arr[s*2+1].split(' ').map(Number);
      let useP = false, hill = 1, currH = hArray[0];
      for (var i = 1; i < n; i++) {
        if (hArray[i] > currH) {
          if (currH + u < hArray[i]) {
            console.log(hill);
            continue loop;
          }
          hill++;
        } else if (hArray[i] < currH) {
          if (currH - d <= hArray[i]) {
            hill++;
          } else if (!useP) {
            hill++;
            useP = true;
          } else {
            console.log(hill);
            continue loop;
          }
        } else {
          hill++;
        }
        currH = hArray[i];
      }
      console.log(hill);
    }
});
