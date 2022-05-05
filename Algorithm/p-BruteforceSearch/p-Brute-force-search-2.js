// 문제 설명
// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers는 길이 1 이상 7 이하인 문자열입니다.
// numbers는 0~9까지 숫자만으로 이루어져 있습니다.
// "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

const numbers = "2"; //return 	3

function solution(numbers) {
  var answer = 0;
  const numbersToArray = [...numbers].map((number) => Number(number));
  const total = [];

  const 순열 = (배열, 뽑을갯수) => {
    const result = [];
    if (뽑을갯수 === 1) return 배열.map((숫자) => [숫자]);

    배열.forEach((fix, index, origin) => {
      const restArr = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const 또순열 = 순열(restArr, 뽑을갯수 - 1); // [[2],[3],[4]]
      const 고정된거랑합친거 = 또순열.map((숫자) => [fix, ...숫자]);
      result.push(...고정된거랑합친거);
    });
    return result;
  };

  numbersToArray.forEach((value, index, arr) => {
    total.push(...순열(arr, index + 1));
  });

  let numberList = total.map((num) => Number(num.join("")));
  const set = new Set(numberList);
  numberList = [...set];
  console.log(numberList);

  numberList.forEach((number, index) => {
    if (number !== 0 && number !== 1) {
      if (number === 2) {
        //2일때 예외처리
        answer += 1;
      }
      for (let i = 2; i < number; i++) {
        if (number % i === 0) break;
        if (i === number - 1) {
          console.log(number);
          answer += 1;
        }
      }
    }
  });
  console.log(answer);
  return answer;
}

solution(numbers);
