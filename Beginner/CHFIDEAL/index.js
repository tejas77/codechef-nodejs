process.stdin.resume();
process.stdin.setEncoding('utf8');

doors = [1, 2, 3];
x = randomIntInc(1, 3);
delete doors[x-1];

process.stdout.write(x.toString() + '\n');

var remainder = '';
y = 0;
process.stdin.on('data', function(chunk) {
  var lines = chunk.toString().split('\n');
  lines.unshift(remainder + lines.shift());
  remainder = lines.pop();
  lines.forEach(function(line) {
    y = parseInt(line);
    delete doors[y-1];
    chooseZ();
  });
});

function randomIntInc(low, high) {
  return Math.floor((Math.random() * (high - low + 1)) + low);
}

function chooseZ(y) {
  if (y === x) process.exit(1);
  if (y !== null) {
    z = doors.filter(function(x) { return x !== null; });
  }
  process.stdout.write(z.toString() + '\n');
  process.exit(0);
}
