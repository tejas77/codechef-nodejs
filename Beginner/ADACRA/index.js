process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    loop: for (var s = 0; s < t; s++) {
      const crayons = arr.shift();
      let countup = 0;
      let countdown = 0;
      for(let j = 0; j < crayons.length; ){
          if(crayons[j] === 'U'){
              while(j < crayons.length && crayons[j] == 'U'){
                  j++;
              }
              countup++;
          }else{
              while(j < crayons.length && crayons[j] == 'D'){
                  j++;
              }
              countdown++;
          }
      }
      console.log(countup < countdown ? countup : countdown);
    }
});
