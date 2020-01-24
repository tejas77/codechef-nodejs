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
      let n = Number(arr[s*2]);
      const nArray = arr[s*2+1].split(' ').map(Number);
      let index, max = Infinity;
      let prefixSum = 0, total = nArray.reduce((a,b) => a+b);
      for (var i = 0; i < nArray.length; i++) {
        prefixSum += nArray[i];
        let to = prefixSum + total;
        total -= nArray[i];
        if(to < max){
          max = to;
          index = i;
        }
      }
      console.log(index+1);
    }
});
