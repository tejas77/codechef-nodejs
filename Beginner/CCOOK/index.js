process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    const syears = [2010, 2015, 2016, 2017, 2019];
    loop: for (var i = 0; i < t; i++) {
      const n = arr.shift().split(' ').map(Number).filter(Boolean).length;
      n === 0 ? console.log('Beginner') :
      n === 1 ? console.log('Junior Developer') :
      n === 2 ? console.log('Middle Developer') :
      n === 3 ? console.log('Senior Developer') :
      n === 4 ? console.log('Hacker') : console.log('Jeff Dean');
    }
});
