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
      const d = Number(arr[shift]);
      let schedule = new Array(31).fill(0),tSolved = 0;
      for (var i = 1; i <= d; i++) {
        const [day,solved] = arr[shift+i].split(' ').map(Number);
        schedule[day-1] = solved;
      }
      for (i = 0; i < schedule.length; i++) {
        tSolved += schedule[i];
        schedule[i] = tSolved;
      }
      const q = Number(arr[shift+d+1]);
      for (i = 1; i <= q; i++) {
        const [deadline,reqS] = arr[shift+i+d+1].split(' ').map(Number);
        console.log(schedule[deadline-1] < reqS ? 'Go Sleep' : 'Go Camp');
      }
      shift += d+q+2;
    }
});
