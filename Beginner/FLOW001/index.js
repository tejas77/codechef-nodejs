process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (data) {
    main(data)
});


function main(data) {
    let inputArr=data.split('\n');
    let n=parseInt(inputArr.shift());
    for(let i=0;i<n;i++){
        let nosToAdd=inputArr[i].split(' ');
        let sum=parseInt(nosToAdd[0])+parseInt(nosToAdd[1]);
        console.log(sum);
    }
}
