const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const space = input.shift();
  console.log(space);
  console.log(input);
  let firstWhiteCase = 0;
  let firstBlackCase = 0;
}

solution(input);
