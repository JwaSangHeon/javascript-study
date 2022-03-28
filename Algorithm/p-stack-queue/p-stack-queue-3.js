// 문제 설명
// 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

// 예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

// 경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
// 0	[]	[]	[7,4,5,6]
// 1~2	[]	[7]	[4,5,6]
// 3	[7]	[4]	[5,6]
// 4	[7]	[4,5]	[6]
// 5	[7,4]	[5]	[6]
// 6~7	[7,4,5]	[6]	[]
// 8	[7,4,5,6]	[]	[]
// 따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

// solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

// 제한 조건
// bridge_length는 1 이상 10,000 이하입니다.
// weight는 1 이상 10,000 이하입니다.
// truck_weights의 길이는 1 이상 10,000 이하입니다.
// 모든 트럭의 무게는 1 이상 weight 이하입니다.


// 2	10	[7,4,5,6]	8

const bridge_length = 5;
const weight = 5;
const truck_weights = [2, 2, 2, 2, 1, 1, 1, 1, 1];

//answer = 19

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;

  let bridge = [];
  for(let i = 0; i < bridge_length; i++) {
    bridge.push(0);
  } // [0,0]

  let finishTrucks= [];
  const firstTruckNum = truck_weights.length;

  while(finishTrucks.length !== firstTruckNum){
    let sum = 0;
    const finishTruck = bridge.pop(); //[0]
    if(finishTruck !== 0){
      finishTrucks.push(finishTruck); //트럭이 다리에서 나오면 끝난 트럭 배열에 넣는다. [7]
    }
    bridge.unshift(truck_weights.shift());//[5,4]
    sum = bridge.reduce((acc, cur) => acc + cur, 0); // 9
    if(sum > weight){
      const ready = bridge.shift(); // 4
      bridge.unshift(0);//[0,7]
      truck_weights.unshift(ready);//[4,5,6] 
    }
    // if(sum <= weight){// 다리위의 총합이 무게보다 작거나 같은 떄
    //   bridge.unshift(truck_weights.shift());
    // } else {
    //   bridge.unshift(0);
    // }
    // sum = bridge.reduce((acc, cur) => acc + cur, 0);//[0, 0], 0+0 = 0 다리위의 총합 7
    answer++;
    
  }
  console.log(answer);
  // console.log(bridge, sum);
  // let answer = 0;
  // for(let i = 0; i < truck_weights.length; i++){
  //   bridge.push(truck_weights[i]);
  //   // console.log(bridge.reduce((acc, cur) => acc + cur, 0));
  //   if(bridge.reduce((acc, cur) => acc + cur, 0) > weight){
  //     bridge.pop();
  //     answer +
  //   }
  //}



  // !-------------------------------------------------------
  // var answer = 0;
  // let turn = 0;
  // while(truck_weights.length !== 0){
  //   let truckSum = 0; // 다리에 올라가는 트럭 합
  //   let i = 0;
    

  //   while(truckSum <= weight && truck_weights.length !==0){ // 트럭 무게 합이 다리무게보다 작거나 같다면
  //     truckSum += truck_weights[i];
  //     if(truckSum > weight){
  //       truckSum -= truck_weights[i];
  //       break;
  //     }
  //     truck_weights.splice(0, i);
  //     i++;
  //   }
    
  //   answer += bridge_length + i;
  //   console.log(truckSum, i, answer, truck_weights);
  // }
  // console.log(answer);
  // return answer;
}

solution(bridge_length, weight, truck_weights);
