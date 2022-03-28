const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  input.shift();
  // const numbers = input.slice(1,input.length);
  let array = [];
  // console.log(numbers);
  // console.log(input);
  let newArray = [];

  input.forEach(item => {
    array.push(item.split(' '));
  });
  // console.log(array);
  // newArray = array.map(item => {
  //   console.log(item);
  //   item.forEach(a => {
  //     a = parseInt(a);
  //   });
  // })
  // console.log(newArray);

  // const a = [ '0' , '4' ].map(ele => parseInt(ele));
  // console.log(a);

  array.sort((a,b) => a[1]===b[1] ? a[0]-b[0] : a[1]-b[1]);
  array.forEach(item => {
    const str = item.join(' ');
    console.log(str);
  })
  
}

solution(input);