process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    let shift = 0;
    loop: for (let s = 0; s < t; s++) {
      let [n,m] = arr[shift].split(' ').map(Number);
      let notes = [];
      for (var i = 1; i <= n; i++) {
        notes.push(parseInt(arr[shift+i]));
      }
      console.log(isSubsetSum(notes, n, m) ? 'Yes' : 'No');
      shift += n+1;
    }
});

const isSubsetSum = (notes, n, m) => {
    if (m === 0)
        return true;
    if (n === 0 && m !== 0)
        return false;
    if (notes[n - 1] > m)
        return isSubsetSum(notes, n - 1, m);
    return isSubsetSum(notes, n - 1, m) || isSubsetSum(notes, n - 1, m - notes[n - 1]);
};
