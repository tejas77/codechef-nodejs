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
      const str = arr[s];
      let count = 0;
      for(let j = 0; j < str.length; j++ ){
          for(let k = 0; k < str.length; k++){
              if(j != k && str[j] === str[k]){
                  count = 1;
                  break;
              }
          }
      }
      console.log(count? "yes" : "no");
    }
});
