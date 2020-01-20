process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let input='';
process.stdin.on('data',(data)=>{
    input+=data;
});
process.stdin.on('end',()=>{
    let [testCases,...parenthesesInput]=input.split('\n');
    for(let i = 0 ; i < +testCases ; i++){
        let Mikesparentheses=parenthesesInput[i];
        let MikereplacedParenthesesResult = MikereplacedParentheses(Mikesparentheses);
        console.log(MikereplacedParenthesesResult);
    }
});

function MikereplacedParentheses(parenthesesString){
    let maximumParentheses = findMaxBalance(parenthesesString);
    let res = '('.repeat(maximumParentheses + 1)+')'.repeat(maximumParentheses + 1);
    return res ;
}

function findMaxBalance(S){
	let 	balance = 0;
	let	max_balance = 0;
		for (let index = 1 ; index < S.length ; index++){
			if (S[index] == '(') {
			    balance += 1 ;
			}
			if (S[index] == ')'){
			     balance -= 1 ;
			}
			max_balance = Math.max( max_balance, balance ) ;
		}

		return max_balance ;
}
