process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    loop: for (var s = 0; s < t; s++) {
      let [a,b] = arr.shift().split(' ').map(Number);
      let sum1,c,k=0,sum2=0;
      while (a > 0 || b > 0) {
        sum1=(a%10)+(b%10);
        c=Math.pow(10,k);
        k++;
        sum2=sum2+(sum1%10)*c;
        a=parseInt(a/10);
        b=parseInt(b/10);
      }
      console.log(sum2);
    }
});
