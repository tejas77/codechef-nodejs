process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    const lowA = 97;
    loop: for (let s = 0; s < t; s++) {
      const n = Number(arr[s*2]);
      const isOdd = n&1;
      const nArray = arr[s*2+1];
      let swapped = '';
      for (var i = 1; i < n; i+=2) {
        swapped += replace(nArray[i]);
        swapped += replace(nArray[i-1]);
      }
      isOdd ? swapped += replace(nArray[n-1]) : null;
      console.log(swapped);
    }
});

function replace (char) {
  return String.fromCharCode(Math.abs(char.charCodeAt() - 122)+97);
}
