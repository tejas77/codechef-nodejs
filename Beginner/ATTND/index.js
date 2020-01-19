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
      let students = [], studentFreq = [];
      for (var i = 1; i <= n; i++) {
        const studentName = arr[shift+i];
        students.push(studentName);
        let fName = studentName.split(' ')[0];
        if (studentFreq[fName]) {
          studentFreq[fName]++;
        } else {
          studentFreq[fName] = 1;
        }
      }
      students.forEach(student => {
        let fName = student.split(' ')[0];
        if (studentFreq[fName] > 1) {
          console.log(student);
        } else {
          console.log(fName);
        }
      });
      shift += n+1;
    }
});
