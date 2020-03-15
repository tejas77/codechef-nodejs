
process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});


process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    let defFibArr = fib10(59);
    // console.log({defFibArr});
    loop: for (let s = 0; s < t; s++) {
      const n = Number(arr[s]);
      let number = Math.pow(2,fibNo(n));
      let index = (number)%60;
      // console.log({number,index});
      console.log(defFibArr[index]);
    }
});

fibNo = function(number){
    let binary = number.toString(2);
    // console.log({binary},(binary.slice(2).length)-1);
    return (binary.slice(2).length);
};

fib10 = function(numMax){
    for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x%10);
    }
    return fibArray;
};
