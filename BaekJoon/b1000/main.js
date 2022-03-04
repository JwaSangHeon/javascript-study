let input = require('fs').readFileSync('./input.txt').toString().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// console.log(input);
let lineArray = []; // 입력을 배열로 저장한다.

let lineCount = 5; // 입력의 줄 수

for(let i = 0; i < lineCount; i++){
  let line = input[i].split(' ').map((item) => Number(item));
  lineArray.push(line);
}
// console.log(lineArray);


function solution (lineArray) {
  let result = '';
  let i = 0;
  while(i<5){
    let sum = lineArray[i][0]+lineArray[i][1];
    result += sum
    if(i<4){
      result +='\n';
    }
    i++;
  }
  console.log(result);
}

solution(lineArray);