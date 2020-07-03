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
      const n = Number(arr[s]);
      solve(n);
    }
});

function solve(n) {
	incrementArray = makeIncrementArray(n);
  lineOut = '';
	previousFirstCell = 0;
	for (row=0; row < n; row++) {
		let currentCell = previousFirstCell + row + 1;
		previousFirstCell = currentCell;
		lineOut = currentCell.toString() + ' ';
		for (col=0; col<n-1; col++) {
			currentCell += incrementArray[row + col];

			lineOut += currentCell.toString() + ' ';
		}
		console.log(lineOut);
	}
}

function makeIncrementArray(n) {
	let out = [];
	for (i=1; i<n; i++) out.push(i);
	for (i=n-1; i>0; i--) out.push(i);
	return out;
}
