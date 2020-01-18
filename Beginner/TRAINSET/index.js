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
      let words = [];
      for (var i = 1; i <= n; i++) {
        const [word,isSpam] = arr[shift+i].split(' ');
        if (words[word]) {
          words[word] = isSpam === '1' ? [words[word][0],words[word][1]+1]: [words[word][0]+1,words[word][1]];
        } else {
          words[word] = isSpam === '1' ? [0,1]: [1,0];
        }
      }
      let maxItems = 0;
      for (var word in words) {
        maxItems += Math.max(...words[word]);
      }
      console.log(maxItems);
      shift += n+1;
    }
});
