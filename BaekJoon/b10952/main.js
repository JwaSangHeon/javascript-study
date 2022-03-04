const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let inputArray = []; //입력을 배열로
let inputLength = 6; // 입력 줄 수
for(let i = 0; i < inputLength; i++){
  let imsi = input[i].split(' ').map((item) => +item);
  inputArray.push(imsi);
}

function solution(inputArray) {
  let i = 0;
  let result = '';
  let trueOrFalse = true;
  while (trueOrFalse) {
    let a = inputArray[i][0] + inputArray[i][1];
    if (a === 0) {
      trueOrFalse = false;
      break;
    }
    console.log(a);
    i++;
  }
}

solution(inputArray);