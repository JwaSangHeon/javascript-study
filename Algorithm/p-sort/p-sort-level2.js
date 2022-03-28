const numbers = [6, 10, 2]; // return "6210"
// 문제 설명
// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// numbers의 길이는 1 이상 100,000 이하입니다.
// numbers의 원소는 0 이상 1,000 이하입니다.
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.


function solution(numbers) {
  const totalNumber = [];

  let factorial = 1;
  for(let i = 1; i <= numbers.length; i++){
    factorial = factorial * i;
  }

  while(true){
    const numbersCopy = numbers.slice();
    const newArray = [];
    // for(; i<numbersCopy.length; i++){
    //   const randomIndex = Math.floor(Math.random()*numbersCopy.length);
    //   newArray.push(numbersCopy[randomIndex]);
    //   numbersCopy.splice(randomIndex,1);
    // }
    while(true){
      const randomIndex = Math.floor(Math.random()*numbersCopy.length);
      newArray.push(numbersCopy[randomIndex]);
      numbersCopy.splice(randomIndex,1);
      if(numbersCopy.length < 1){
        break;
      }
    }
    if(!(totalNumber.includes(newArray.join('')))){
      totalNumber.push(newArray.join(''));
    }
    if(totalNumber.length === factorial){
      break;
    }
  }
  totalNumber.sort((a,b) => b-a);
  var answer = totalNumber[0]
  console.log(answer);
  return answer;
}

solution(numbers);


// const goAndStop = true;
//   const totalNumber=[];
  
  
//   function a(numbers){
//       const numlist = numbers;
//       const newArray = [];
//       const randomIndex =Math.floor(Math.random() * numlist.length); // 0~3미만의 수
//       const num = numlist[randomIndex];
//       newArray.push(num);
//       numlist.splice(randomIndex,1);
//       if(numlist.length < 1){
//         totalNumber.push(newArray.join(''));
//         return;
//       }
//   }
//   console.log(numbers);
//   console.log(totalNumber);


