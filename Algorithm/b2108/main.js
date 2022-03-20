const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

function solution(input) {
  const numberLength = input[0];
  const numbers = input.slice(1,input.length);
  let sum = 0;
  numbers.forEach(element => {
    sum += Number(element);
  });
  const average = Math.round(sum / numbers.length);
  const sortedNumbers = numbers.sort((a,b) => a-b);

  const map = new Map();
  for(let i = 0; i < sortedNumbers.length; i++){
    if(!map.has(sortedNumbers[i])){
      map.set(sortedNumbers[i], 1);
    } else {
      map.set(sortedNumbers[i], map.get(sortedNumbers[i])+1);
    }
  }
  let maxValue = 0;
  let answer = [];
  map.forEach((element, key) => {
    if (maxValue < element) {
      maxValue = element;
      answer = [];
      answer.push(key);
    } else if (maxValue === element) {
      answer.push(key);
    }
  });
  
  
  console.log(Number(sortedNumbers[Math.floor(sortedNumbers.length/2)]));
  console.log(average === -0 ? 0 : average);
  (answer.length !== 1) ? console.log(Number(answer[1])) : console.log(Number(answer[0]));
  console.log(Number(sortedNumbers[sortedNumbers.length-1]) - Number(sortedNumbers[0]));
}

solution(input);