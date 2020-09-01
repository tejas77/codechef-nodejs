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
      const str = arr[s*2].split('');
      const [sa,sb] = arr[s*2+1].split(' ').map(Number);
      let aIndex = str.indexOf('A'), bIndex = str.indexOf('B');
      while (bIndex > aIndex || aIndex+1 === str.length || bIndex === 0) {
        aIndex+=sa;
        bIndex-=sb;
        if (aIndex === bIndex) {
          console.log('unsafe');
          continue loop;
        }
      }
      console.log('safe');
    }
});
