"use strict";

// Promise is a javaScript object for asynchronous operation.
// State: pending => fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// Promise가 생성될 때, 함수가 자동으로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie"); //성공
    // reject(new Error("no network")); //에러
  }, 2000); // 완료
});

// 2. Consumer: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  }) // 리턴된 값이 promise이기 때문에 다시 catch를 호출할 수 있다. 이것을 '체이닝'이라고 한다.
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally!");
  }); // 성공하든 실패하든 상관없이 어떤 기능을 마지막으로 수행하고 싶을 때 사용한다.

// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen}=> 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen}=> 🥚`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=> 🍳`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  // .then(getEgg) // 받아오는 value를  다른함수로 전달하는 경우 생략가능하다.
  .catch((error) => {
    return "🍕";
  }) // 바로바로 에러 처리를 해서 사용한다.
  .then((egg) => cook(egg))
  // .then(cook)
  .then((meal) => console.log(meal))
  // .then(console.log)
  .catch(console.log);
