const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [inputLength, changeCount] = input[0].split(" ").map((ele) => +ele);
  let result = [];
  let count = 0;

  let array = input[1].split(" ").map((ele) => +ele);
  const sortedArray = input[1]
    .split(" ")
    .map((ele) => +ele)
    .sort((a, b) => a - b);

  while (!(array.toString() === sortedArray.toString())) {
    for (let i = 0; i < inputLength - 1; i++) {
      if (array[i] > array[i + 1]) {
        count++;

        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        if (count === changeCount) {
          result.push(array[i]);
          result.push(array[i + 1]);
        }
      }
    }
  }
  if (count < changeCount) {
    console.log(-1);
  } else {
    console.log(result.sort((a, b) => a - b).join(" "));
  }
}

solution(input);
