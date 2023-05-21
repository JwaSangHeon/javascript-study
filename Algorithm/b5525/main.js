const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let result = 0;
  const [caseNum, totalLength, givenStrings] = input; // 1, 13, OOIOIOIOIIOII

  // 숫자를 받아서 case를 만든다.
  const makeCase = (num) => {
    let caseString = "I";
    for (let i = 0; i < caseNum; i++) {
      caseString += "OI";
    }
    return caseString;
  };

  // 주어진 문자열
  let strings = givenStrings;
  while (strings.indexOf(makeCase(caseNum)) > -1) {
    strings = strings.replace("IOI", "I");
    result++;
  }

  console.log(result);
  return result;
}

solution(input);

// 실패...
