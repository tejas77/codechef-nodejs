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
      let nArray = arr[s*2+1].split(' ').map(Number);
      nArray = nArray.sort((a,b) => a-b);
      let kSlice = nArray.slice(0,k);
      let mkSlice = Math.max(...kSlice);
      let mn = nArray.filter(val => val === mkSlice).length;
      let r = kSlice.filter(val => val === mkSlice).length;
      // console.log({nArray,kSlice,mkSlice,mn,r});
      console.log(Math.floor(factorial(mn)/(factorial(mn-r)*factorial(r))));
    }
});

function factorial(n, r = 1) {
  while (n > 0) r *= n--;
  return r;
}
