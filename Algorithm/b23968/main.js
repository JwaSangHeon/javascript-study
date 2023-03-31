const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const inputlength = input.shift();
  let newArray = input[0].split(' ');
  // console.log(newArray);
  // console.log(input);
  newArray = newArray.map(x => +x);
  let result=[];
  // console.log(newArray);
  for(let i = 0; i < newArray.length; i++){
    const compareNum = newArray[i];
    let count = 0;
    let removeOverlap = [];
    for(let j = 0; j < newArray.length; j++){
        if(compareNum > newArray[j] && !(removeOverlap.includes(newArray[j]))){
          count++;
        }
        removeOverlap.push(newArray[j]);
    }
    result.push(count);
  }
  console.log(result.join(' '));
}

solution(input);