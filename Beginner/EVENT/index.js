process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    const l = [0,"sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    loop: for (let s = 0; s < t; s++) {
      let [start,end,date1,date2] = arr[s].split(' ');
      date1 = Number(date1);
      date2 = Number(date2);
      let d1 = l.indexOf(start);
      let d2 = l.indexOf(end);
      let a;
      if (d1>d2) {
        a = 7 - d1 + d2;
      } else if (d1 < d2) {
        a = d2 - d1;
      } else {
        a = d1 - d2;
      }
      let l1 = [];
      while ((1+a) <= date2) {
        if (date1 <= 1+a && 1+a <= date2) {
          l1.push(1+a);
        }
        a += 7;
      }
      console.log(l1.length === 0 ? 'impossible' : l1.length === 1 ? l1[0] : 'many');
    }
});
