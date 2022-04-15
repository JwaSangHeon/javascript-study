// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(["apple", "banana"]);
console.log(json); //["apple","banana"]

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); //{"name":"tori","color":"white","size":null,"birthDate":"2022-04-15T09:03:40.867Z"} (함수는 object에 있는 데이터가 아니기 때문에 jump는 포함하지 않는다. symbol과 같이 자바스크립트에서 자체로 들어있는 특별한 데이터도 JSON에 포함되지 않는다.)

json = JSON.stringify(rabbit, ["name"]); // 토끼 object에서 이름만 JSON으로 하고 싶다면 배열에 property이름만 전달하면 된다.
console.log(json); //{"name":"tori"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value;
});
console.log(json);
// key: , value: [object Object]
// key: name, value: tori
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2022-04-15T09:13:40.249Z
// key: jump, value: () => {
//     console.log(`${this.name} can jump!!`);
//   }
// {"name":"tori","color":"white","size":null,"birthDate":"2022-04-15T09:13:40.249Z"}

// 함수의 이름은 동일하지만, 어떤 파라미터, 몇 개를 전달하냐에 따라서 각각 다른 방식으로 호출이 가능한것을 'Overloading(오버로딩)'이라고 한다.

// 2. JSON to Object
// parse(JSON)
json = JSON.stringify(rabbit);
let obj = JSON.parse(json);
console.log(obj); //{name: 'tori', color: 'white', size: null, birthDate: '2022-04-15T09:17:58.984Z'}
rabbit.jump(); //can jump!!
// 하지만 obj는 stringify된 JSON을 다시 가져온 것이기 때문에 jump()라는 API가 없다.
// obj.jump(); //error
console.log(rabbit.birthDate.getDate()); // birthDate는 new Date()로 만들어진 객체이므로 그 안에있는 getDate함수를 호출할 수 있다.
// 하지만 obj에 들어있는 birthDate는 String이므로 getDate()함수를 사용할 수 없다.
// console.log(obj.birthDate.getDate()); //error
// 이것을 사용하고 싶다면 parse에 두 번째 파라미터에 콜백함수를 이용하면 된다.
obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date() : value;
});
console.log(obj.birthDate.getDate());
