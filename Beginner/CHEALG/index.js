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
      let string = arr[s].split('');
      let sca = '', count = 0, chr = string[0];
      for (var i = 0; i < string.length; i++) {
        if (string[i] === chr) {
          count++;
        } else {
          sca += `${chr}${count}`;
          chr = string[i];
          count = 1;
        }
      }
      sca += `${chr}${count}`;
      console.log(sca.length < string.length ? 'YES' : 'NO');
    }
});
