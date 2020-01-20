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
      const n = Number(arr[s*2]);
      const nArray = arr[s*2+1].split(' ').map(Number);
      let maxSpeedCars = 1;
      let fCar = nArray[0];
      for (var i = 1; i < n; i++) {
        if (nArray[i] < fCar) {
          maxSpeedCars++;
          fCar = nArray[i];
        }
      }
      console.log(maxSpeedCars);
    }
});
