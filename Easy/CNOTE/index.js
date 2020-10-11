process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputData = '';
let currentLine = 0;

function input() {
    return inputData[currentLine++];
}

process.stdin.on('data', _ => inputData += _);
process.stdin.on('end', () => {
    inputData = inputData.split(/\s+/).map(Number);

    let noOfTestCases = input();
    let outputString = '';

    while (noOfTestCases--) {

        let xPagesLongPoetry = input();
        let yPagesLeft = input();
        let kBudget = input();
        let nNotebook = input();

        let result;
        while (nNotebook--) {
            let noteBookPage = input();
            let noteBookPrice = input();
            result = checkLucky(xPagesLongPoetry, yPagesLeft, kBudget, nNotebook, noteBookPage, noteBookPrice );
            if(result) {
                currentLine += (nNotebook * 2);
                nNotebook = 0;
            }
        }
        outputString += (result || 'UnluckyChef') + '\n';
    }
    process.stdout.write(outputString);


});
function checkLucky(xPagesLongPoetry, yPagesLeft, kBudget, nNotebook, noteBookPage, noteBookPrice) {
    const requiredPages = xPagesLongPoetry - yPagesLeft;
    if (requiredPages <= noteBookPage && kBudget >= noteBookPrice) return 'LuckyChef';
}
