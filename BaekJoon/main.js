//번호 두 개 이상 받을때
//let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
//let input = require('fs').readFileSync('./input.txt').toString().split('\n');


//번호 한개 입력 받을때
//let input = Number(require('fs').readFileSync('/dev/stdin').toString());
let input = Number(require('fs').readFileSync('./input.txt').toString());
// console.log(input);

let result = '';
let j = 0;

for (let i = 0; i<input; i++){
  j = 4-i;
  result += ' '.repeat(j)+'*'.repeat(i+1)+'\n';
}
console.log(result);