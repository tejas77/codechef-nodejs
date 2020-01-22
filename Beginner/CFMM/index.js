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
      const n = Number(arr[shift]);
      let cCount = 0,oCount = 0, dCount = 0, eCount = 0, hCount = 0, fCount = 0;
      for (var i = 1; i <= n; i++) {
        const str = arr[shift+i];
        for (var j = 0; j < str.length; j++) {
          str[j] === 'c' ? cCount++ :
          str[j] === 'o' ? oCount++ :
          str[j] === 'd' ? dCount++ :
          str[j] === 'e' ? eCount++ :
          str[j] === 'h' ? hCount++ :
          str[j] === 'f' ? fCount++ : null;
        }
      }
      let meals = 0;
      while (cCount >=2 && oCount >= 1 && dCount >= 1 && eCount >= 2 && hCount >= 1 && fCount >= 1) {
        meals++;
        cCount -= 2;
        eCount -= 2;
        dCount--;
        hCount--;
        oCount--;
        fCount--;
      }
      console.log(meals);
      shift += n+1;
    }
});
