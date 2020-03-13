process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
  let [testCases,...rowsColumn] = arr.split('\n');
  for(let i = 0 ; i < +testCases ; i++){
      let [row,column] =rowsColumn[i].split(' ');
      let cutBoardResult = cutBoard(+row , +column);
      console.log(cutBoardResult);
  }
});

function cutBoard(row, column) {
    return (row - 1) * (column-1);
}
