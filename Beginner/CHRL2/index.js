process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    const s = arr.shift().split('');
    let c = 0, h = 0, e = 0, f = 0;
    for (var i = 0; i < s.length; i++) {
      s[i] === 'C' ? c++ : null;
      s[i] === 'H' && c > h ? h++ : null;
      s[i] === 'E' && h > e ? e++ : null;
      s[i] === 'F' && e > f ? f++ : null;
    }
    console.log(f);
});
