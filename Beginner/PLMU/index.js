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
      let c1=0,c2=0;
        for(let i of nArray)
        {
            if(i===0)
            c1++;
            if(i===2)
            c2++;
        }
        console.log(Math.floor((c1*(c1-1))/2)+Math.floor((c2*(c2-1)/2)));

    }
});
