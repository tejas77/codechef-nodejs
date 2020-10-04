var inputBuffer = "";
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
    if (chunk.indexOf('\n') < 0) {
        inputBuffer += chunk;
    } else {
        var lines = chunk.split(/\r\n|\n/);
        var nLastLineIndex = lines.length - 1;
        inputBuffer += lines[0];
        processInputTextLine(inputBuffer);

        for (var i = 1; i < nLastLineIndex; i++) {
            processInputTextLine(lines[i]);
        }

        inputBuffer = lines[nLastLineIndex];
    }
});
process.stdin.once('end', function () {
    if (inputBuffer.length > 0) {
        processInputTextLine(inputBuffer);
    }
});

var lineNum = 0;
var nTestCases;
var n;
var triangle = new Array(100);

function main() {
    var answer = 0;
    var i, j;

    for (i = 1; i < n; i++) {
        for (j = 0; j <= i; j++) {
            var leftAbove = 0, above = 0;
            if (j > 0) {
                leftAbove = triangle[i - 1][j - 1];
            }
            if (j < i) {
                above = triangle[i - 1][j];
            }
            triangle[i][j] += Math.max(leftAbove, above);
        }
    }

    for (j = 0; j < n; j++) {
        answer = Math.max(answer, triangle[n - 1][j]);
    }
    console.log(answer);
}

function processInputTextLine(textLine) {
    if (lineNum === 0) {
        nTestCases = parseInt(textLine);
    } else if (lineNum == 1) {
        n = parseInt(textLine);
    } else {
        triangle[lineNum - 2] = textLine.split(/\s+/).map(Number);
        if (lineNum == n + 1) {
            main();
            lineNum = 0;
        }
    }
    lineNum++;
}
