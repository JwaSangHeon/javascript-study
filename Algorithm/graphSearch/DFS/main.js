const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const graphInfo = input[0].split(" ").map((ele) => parseInt(ele));
  input.shift(); // 첫 번쨰 요소를 숫자 배열로 정리 및 제거

  const connects = input.map((eles) =>
    eles.split(" ").map((ele) => parseInt(ele))
  ); // 연결되어 있는 정보 배열

  const bfs = [];

  bfs.push(graphInfo[2]);

  const firstNode = connects
    .filter((ele) => ele.includes(graphInfo[2]))
    .sort((a, b) => a[1] - b[1])
    .map((line) => bfs.push(line[1]));

  console.log(bfs, firstNode);

  // console.log(connects, graphInfo);
}

solution(input);
