process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    let bst = [Number(arr[0].split(' ')[1])];
    console.log(1);
    loop: for (let s = 1; s < t; s++) {
      let [i,val] = arr[s].split(' ');
      let index = 0;
      val = Number(val);
      if (i === 'i') {
        while (bst[index]) {
          if (val > bst[index]) {
            index = 2*(index + 1);
          } else {
            index = 2*(index + 1) - 1;
          }
        }
        bst[index] = val;
        console.log(index+1);
      } else {
        console.log(bst.indexOf(val)+1);
        bst[bst.indexOf(val)] = false;
      }
    }
});
