process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputData = '';
let currentLine = 0;
let primeStore = {};

function input() {
    return inputData[currentLine++];
}

process.stdin.on('data', _ => inputData += _);
process.stdin.on('end', () => {
    inputData = inputData.split(/\s+/).map(Number);

    let noOfTestCases = inputData.shift();
    while (noOfTestCases--) {
      let primeStart = input();
      let primeEnd = input();
      for(var k = primeStart; k <= primeEnd; k++){
        if (primeStore[k]) {
          console.log(k);
        } else if (is_prime(k)) {
          primeStore[k] = true;
          console.log(k);
        }
      }
      noOfTestCases > 0 && console.log('');
    }
});

function is_prime(n){
   if( n === 1){
       return false;
   }
   if(n === 2 || n === 3){
       return true;
   }
   if((n%2) === 0 || (n%3) === 0){
       return false;
   }
   var divisor = 5;
   while((divisor*divisor) <= n){
       if((n%divisor) === 0 || (n%(divisor+2)) === 0 ){
           return false
       }
       divisor = divisor + 6;
   }
   return true;
}
