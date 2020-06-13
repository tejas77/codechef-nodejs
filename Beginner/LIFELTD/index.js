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
      const a = arr[s*3];
      const b = arr[s*3+1];
      const c = arr[s*3+2];
      for (var i = 0; i < 2; i++) {
        if ((a[i]==='l' && b[i]==='l' && b[i+1]==='l') || (b[i]==='l' && c[i]==='l' && c[i+1]==='l')){
          console.log('yes');
          continue loop;
        }
      }
      console.log('no');
    }
});
