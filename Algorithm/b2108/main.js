const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
console.log(input);

function solution(input) {
  const numberLength = input[0];
  const numbers = input.slice(1,input.length);


  const sum =numbers.reduce((acc, item) => acc + Number(item), 0);
  // let sum = 0;
  // numbers.forEach(element => {
  //   sum += Number(element);
  // });
  const average = Math.round(sum / numbers.length);
  const sortedNumbers = numbers.sort((a,b) => a-b);

  const map = new Map(); //map 인스턴스 생성

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
  
  const centerValue = parseInt(sortedNumbers[Math.floor(sortedNumbers.length/2)]);
  const maxminusmin = parseInt(sortedNumbers[sortedNumbers.length-1]) - parseInt(sortedNumbers[0]);
  
  
  console.log(average === -0 ? 0 : average);
  console.log(centerValue);
  console.log(answer.length !== 1 ? parseInt(answer[1]) : parseInt(answer[0]));
  // (answer.length !== 1) ? console.log(Number(answer[1])) : console.log(Number(answer[0]));
  console.log(maxminusmin);
}

solution(input);