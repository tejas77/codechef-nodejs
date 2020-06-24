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
      const name = arr[s].split(' ');
      let fName = '',n = name.length;
      for (var i = 0; i < n; i++) {
        if (i !== n-1) {
          fName += `${name[i][0].toUpperCase()}. `;
        } else {
          fName += name[i].charAt(0).toUpperCase() + name[i].slice(1).toLowerCase();
        }
      }
      console.log(fName);
    }
});
