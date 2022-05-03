// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(""); //인자로 들어가는 값을 기준으로 합쳐진다.
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🍐, 🍌";
  const result = fruits.split(",", 2); // (구분자(필수!), 갯수)
  console.log(result);
}
// Q3. make this array look like this: [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // 기존의 배열도 바뀐다.
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // const result = array.splice(2, 3);
  // console.log(result);
  // console.log(array); // 기존 배열에서 삭제된다.
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array); // 기존 배열은 유지된다.
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90); // find(콜백함수): 첫 번째로 true인 아이를 return(콜백함수는 boolean값을 리턴해야됌)
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled === true); // filter(콜백함수) : 콜백함수 값이 true인 값만 모아서 배열을 만들고 리턴한다.
  console.log(result);
}
// Q7. make an array containing only the students' scores
// result should be: [45,80,90,66,88]
{
  const result = students.map((student) => student.score); //map(콜백함수) : 콜백함수를 통해 새로운 array로 mapping한다.(인자는 이해하기 쉽게 만들어줘야 편하다)
  console.log(result);
}
// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50); //some(콜백함수) : 콜백함수에 맞는 값이 하나라도 있으면 true, 아니면 false 출력
  console.log(result);
  const result2 = students.every((student) => student.score >= 50); //every(콜백함수) : 콜백함수에 모든 값이 맞으면 true, 아니면 false 출력
  console.log(result2);
}
// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0); //reduce():리턴되는 값은 누적된 값을 리턴한다(모든 값을 누적할때 사용)
  console.log(result / students.length); //reduceright(): 뒤에서부터 반복
}
// Q10. make a string containing all the scores
// result should be: '45,80,90,66,88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50) // 50점 이상인 애들만
    .join();
  console.log(result);
}
// Bonus! do Q10 sorted in ascending order
// result should be: '45,66,80,88,90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
