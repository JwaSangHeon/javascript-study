const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const peopleNumber = input[0];
  const people = input.slice(1,input.length);
  const array = [];
  people.forEach(element => {
    array.push(element.split(' '));
  });
  
  array.sort((a,b) => a[0]- b[0]);

  array.forEach(element => {
    const str = element.join(' ');
    console.log(str);
  })
  // let strArray = [];
  // for(let i = 0; i < peopleNumber; i++){
  //   const str = array[i].join(' ');
  //   strArray.push(str);
  // }
  // console.log(strArray.join('\n'));

}
solution(input);