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
      let str = arr.shift(), cnt = 0, n = 1;
        while(n < str.length + 1){
            if(str[n % str.length] !== str[n - 1]) cnt++;
            n++;
        }
        console.log(cnt <= 2 ? 'uniform' : 'non-uniform');
    }
});
