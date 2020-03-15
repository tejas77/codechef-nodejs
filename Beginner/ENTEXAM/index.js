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
      const [n,k,e,m] = arr[shift].split(' ').map(Number);
      let students = [];
      for (var i = 1; i < n; i++) {
        const score = arr[shift+i].split(' ').reduce(function(a, b) { return parseInt(a) + parseInt(b); }, 0);
        students.push(score);
      }
      let myScore = arr[shift+n].split(' ').reduce(function(a, b) { return parseInt(a) + parseInt(b); }, 0);
      myScore =  isNaN(myScore) ? 0 : myScore;
      students.sort(function(a, b) {
        return a - b;
      });

      var numberToBeat = n - k;
      var minScore = students[numberToBeat - 1] + 1;
      var scoreRequired = minScore - myScore;
      var result;
      if (scoreRequired > m) {
        result = 'Impossible';
      } else if (scoreRequired < 0) {
        result = 0;
      } else {
        result = scoreRequired;
      }
      console.log(result);
      shift += n+1;
    }
});
