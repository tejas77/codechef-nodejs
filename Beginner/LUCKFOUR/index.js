process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.trim().split('\n');
    arr.shift();
    arr = arr.map(count4s);
    process.stdout.write(arr.join("\n"));
});

function count4s(numb) {
  return numb.split('').reduce((a, b) => a + (b == "4" ? 1 : 0), 0);
}
