const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let inputArray = []; //입력을 배열로
let inputLength = 14; // 입력 줄 수
for(let i = 0; i < inputLength; i++){
  let imsi = input[i].split(' ').map((item) => +item);
  inputArray.push(imsi);
}

function solution(inputArray) {
  console.log(inputArray);
}

solution(inputArray);