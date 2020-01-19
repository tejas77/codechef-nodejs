process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var n = arr.shift();
    var soldiers = arr.shift().split(' ').map(Number);
    let lucky = soldiers.filter(value => value % 2 === 0);
    lucky > (soldiers.length/2) ? console.log('READY FOR BATTLE') : console.log('NOT READY');
});
