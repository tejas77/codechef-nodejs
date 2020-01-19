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
      let participants = new Array(n);
      for (var i = 1; i <= n; i++) {
        participants[i-1] = arr[shift+i];
      }
      let result = participants[0];
      for(let i=1; i<participants.length; i++) {
          let temp = (parseInt(result,2) ^ parseInt(participants[i],2));
          let str = temp.toString();
          result = (+str).toString(2);
      }
      console.log(result.split('').map(Number).filter(Boolean).length);
      shift += n+1;
    }
});
