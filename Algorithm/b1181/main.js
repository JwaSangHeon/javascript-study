const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

function solution(input) {
  const strInput = input.slice(1,14);
  strInput.sort((a,b) => a.length-b.length || a.localeCompare(b));
  const arr = new Set(strInput);
  arr.forEach((a) => {
    console.log(a);
  });
}

solution(input);