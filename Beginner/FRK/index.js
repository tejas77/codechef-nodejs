process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    const chef = ['ch', 'he', 'ef'];
    let friend = 0;
    loop: for (let s = 0; s < t; s++) {
      const str = arr[s];
      for (var i = 0; i < chef.length; i++) {
        if (str.indexOf(chef[i]) !== -1) {
          friend++;
          continue loop;
        }
      }
    }
    console.log(friend);
});
