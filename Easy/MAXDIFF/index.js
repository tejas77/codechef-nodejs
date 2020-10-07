process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

let n,k;
let result = 0;
const sortFunc = (a,b) => a - b;
const reduceFunc = (s, item) => s + item;
const forEachFunc = (item,idx) => { result = idx >= k ? result + item : result - item };

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    loop: for (let s = 0; s < t; s++) {
      [n, k] = arr[s*2].split(' ').map(Number);
      const kItems = arr[s*2+1].trim().split(' ').map(Number).sort(sortFunc);
      result = 0;
      if (k > n/2) {
        k = n-k;
      }
      kItems.forEach(forEachFunc);
      console.log(result);
    }
});
