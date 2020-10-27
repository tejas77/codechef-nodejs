process.stdin.resume();
process.stdin.setEncoding("utf8");

var arr = "";
process.stdin.on("data", function (chunk) {
  arr += chunk;
});

process.stdin.on("end", function () {
  arr = arr.split("\n");
  let t = Number(arr.shift());
  loop: for (let s = 0; s < t; s++) {
      let [n, k, x, y] = arr[s].split(' ').map(Number);
      const aCs = [x];
      for (let i = 0; i < n; i++) {
          let aC = (k + x) % n;
          x = aC;
          if (aCs.includes(aC)) {
              break;
          }
          aCs.push(aC);
      }
      console.log(aCs.includes(y) ? 'YES' : 'NO');
  }
});
