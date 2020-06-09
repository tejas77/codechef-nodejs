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
      let [n,cnty] = arr.shift().split(' '), laddus = 0;
      const redeemable = cnty === 'INDIAN' ? 200 : 400;
      for (var i = 0; i < n; i++) {
        let activity = arr.shift().split(' ');
        if (activity.length === 1) {
          laddus = activity[0] === 'TOP_CONTRIBUTOR' ? laddus + 300 : laddus + 50;
        } else {
          let sr = Number(activity[1]);
          let add = sr < 20 ? 20 - sr : 0;
          laddus = activity[0] === 'CONTEST_WON' ? laddus + 300 + add : laddus + sr;
        }
      }
      console.log(Math.floor(laddus/redeemable));
    }
});
