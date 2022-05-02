// 문제 설명
// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers는 길이 1 이상 7 이하인 문자열입니다.
// numbers는 0~9까지 숫자만으로 이루어져 있습니다.
// "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

const numbers = [1, 2, 3, 4]; //return 	3

const combi = (array, selectNum) => {
  //[1,2,3,4],2
  const result = [];
  if (selectNum === 1) return array.map((ele) => [ele]);

  array.forEach((fixed, index, originArray) => {
    const rest = originArray.slice(index + 1); //[2,3,4]
    const middle = combi(rest, selectNum - 1); // [2,3,4],1 -> [[2],[3],[4]]
    const num = middle.map((ele) => [fixed, ...ele]); //[[1,2],[1,3],[1,4]]
    result.push(...num);
  });
  return result;
};

const a = combi(numbers, 3);

console.log(a);

// function solution(numbers) {
//   var answer = 0;
//   let totalNumber = [];
//   for(let i = 0; i < numbers.length; i++){
//       totalNumber.push(Number(numbers[i]));
//   }
//   totalNumber.push(numbers[0]+numbers[1]);
//   totalNumber.push(numbers[1]+numbers[0]);
//   console.log(totalNumber);
//   return answer;
// }

// solution(answers);
