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
      const str = arr[s*2+1];
      const vowel = 'aeiou';
      let occ = 0;
      for (var i = 0; i < n-1; i++) {
        if (vowel.indexOf(str[i]) === -1 && vowel.indexOf(str[i+1]) !== -1) {
          occ++;
        }
      }
      console.log(occ);
    }
});
