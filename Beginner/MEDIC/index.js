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
      const [yy,mm,dd] = arr[s].split(':').map(Number);
      let count=0;
        if(mm===1||mm===3||mm===5||mm===7||mm===8||mm===10||mm===12) {
          console.log(parseInt((31-dd)/2 + 1));
        } else if(mm===4||mm===6||mm===9||mm===11) {
          console.log(parseInt((30-dd)/2 + 1 + 15 + dd%2));
        } else if(mm===2) {
          console.log(leapcheck(yy) ? parseInt((29-dd)/2 + 1) : parseInt((28-dd)/2 + 1 + 15 + dd%2));
        }
    }
});

function leapcheck(yy)
{
    if(yy%400===0)//leap
        return 1;
    else if(yy%100===0)//not leap
        return 0;
    else if(yy%4===0)//not leap
        return 1;
    else
        return 0;
}
