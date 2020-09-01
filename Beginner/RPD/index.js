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
      const n = Number(arr[s*2]);
      const nArray = arr[s*2+1].split(' ').map(Number);
      let maximum = 0,num;
      for (var i = 0; i < n-1; i++) {
        for (var j = i+1; j < n; j++) {
          num=nArray[i]*nArray[j];
          maximum=Math.max(maximum,maxi(num));
        }
      }
      console.log(maximum);
    }
});

function maxi(n) {
    let s=0;
    while(n>0)
    {
        s+=n%10;
        n= parseInt(n/10);
    }
    return parseInt(s);
}
