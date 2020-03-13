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
      const cm = arr[s*2+1].split(' ');
      var result = "YES";
      for(var k=0; k<n; k++){
        if(cm[k] == "cookie"){
            if(cm[k+1] && cm[k+1] == "milk"){
                result="YES";
            } else {
                result = "NO";
                break;
            }
        }
    }
    console.log(result);
    }
});
