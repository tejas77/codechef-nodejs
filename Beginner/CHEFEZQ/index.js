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
    const [n, k] = arr[s * 2].split(" ").map(Number);
    const nArray = arr[s * 2 + 1].split(" ").map(Number);
    let count = 0;
    for (let i = 0; i < n; i++) {
      count += nArray[i];
      if (count < k) {
        console.log(i + 1);
        break;
      }
      count -= k;
    }
    if (count > k) {
      count = Math.floor(count / k) + 1;
      console.log(count + n);
    }
  }
});
