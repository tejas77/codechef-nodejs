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
      const [n,a,b,c,d,p,q,y] = arr[s*2].split(' ').map(Number);
      const nArray = arr[s*2+1].split(' ').map(Number);
      const walkTime = Math.abs((nArray[b-1] - nArray[a-1])*p);
      const walkToTrainTime = Math.abs((nArray[c-1] - nArray[a-1])*p);
      if (walkToTrainTime > y) {
        console.log(walkTime);
        continue;
      }
      const trainTime = Math.abs((nArray[c-1] - nArray[d-1])*q);
      const trainToBCityTime = Math.abs((nArray[d-1] - nArray[b-1])*p);
      const viaTrainTime = y + trainTime + trainToBCityTime;
      // console.log({walkTime,walkToTrainTime,trainTime,trainToBCityTime,viaTrainTime});
      console.log(walkTime < viaTrainTime ? walkTime : viaTrainTime);
    }
});
