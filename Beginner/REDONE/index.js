process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    var modulus = 1000000007;
    const max = Math.max.apply(null, arr);
    let rtoOneAll = new Array(t), sum = 1;
    rtoOneAll[0] = 1;
    for(var i = 1; i < max; i++){
      sum = ((sum+i+1) + (sum*(i+1))) % modulus;
      rtoOneAll[i] = sum;
    }
    for (let s = 0; s < t; s++) {
      console.log(rtoOneAll[arr[s]-1]);
    }
});
