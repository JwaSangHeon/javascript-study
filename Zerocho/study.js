// 1. 변수
const a = 'hello, a'; // 상수(변화할 수 없다.)
let b = 'hello, b'; // 변하는 값
var c = 'hello, c'; // 예전에 쓰였던 변수(현재 사용 x)

// 0, false, ''(빈 문자열), NaN, undefined, null은 기억.

// 2. 조건문
const aa = 3
if(aa === 3){
    console.log(`hello`);
}else if(aa === 2){
    console.log(`hello2`);
}else{
    console.log(`hello3`);
}

// 3. 반복문
for(let i = 0; i < 10; i++){
    console.log(`hello ${i}`);
}

let aaa = 0;
while(aaa<10){
    console.log(`hello ${aaa}`);
    aaa ++;
}

// 4. 배열
const arr = [1,2,3,4,5];
//뒤에 추가
arr.push(6);
arr.pop();
//앞에 추가
arr.unshift(0);
arr.shift();
//배열 찾기
arr.includes(1); // 값이 있는지 확인
arr.indexOf(2); // 앞에서 부터 값의 인덱스 번호를 찾음(없으면 -1) 
arr.lastIndexOf(3); // 뒤에서 부터 값의 인덱스 번호를 찾음(없으면 -1) 
//중간에 있는 값 대체(삭제)
arr.splice(1,1,22);// 앞의 인자는 인덱스 번호, 뒤에 인자는 그 인덱스 번호로부터 삭제할 갯수(생략하면 그 뒤로 전체 삭제), 마지막 인자는 대체된 자리에 들어갈 값.(생략가능)


// 5. 함수
// (1)함수 선언문
function printA(){
    console.log('a');
}
// (2)함수 표현식
const printB = function(){
    console.log('b');
};
// (3)화살표 함수
const printC = () =>{
    console.log('c');
};
// 기본적으로 return값은 undefined이고, return과 동시에 함수가 종료된다.
// 값을 여러 개 return하려면 배열을 사용한다.
function returnOverTwo(){
    return [1,5];
}

// 함수를 선언할 때는 매개변수(parameter), 함수를 호출할 때는 인수(argument)라고 한다.
// 매개변수와 인수는 여러 개가 될 수 있고, 짝 지어지지 않으면 undefined가 된다.
// 함수 안에서 argument값을 사용할 수 있는데, 이것은 인수를 배열의 형태로 저장하고 있다.


// 6. 객체 리터럴
// 관련된 정보를 묶어서 표현
const sangHeon = {
    name : '좌상헌',
    '2name' : 'Jwa',
    year : 1998,
    month : 9,
    day : 17,
    gender : 'M',// 마지막에도 쉼표를 찍어주는 것 이 좋다.
};
// 배열과 가장 큰 차이점은 각 속성값에 이름이 붙어져 있다.

// 값에 접근하는 법
console.log(sangHeon.name); // 일반적으로 접근할 때
console.log(sangHeon['2name']); // 특수한 경우(문자열이 속성이름일 경우) 접근하는 법

// 속성 추가(변경)
sangHeon.gender = 'F'; //수정
sangHeon.hobby = 'basketball'; //추가

// 속성 삭제
delete sangHeon.gender; // 삭제

// 객체안에 들어있는 함수는 '메서드(method)'라고 한다.
const debug = {
    log: function(value){
        console.log(value);
    },
};
debug.log('Hello, Method!'); // debug객체 안에 log메서드

// 배열과 함수도 객체의 한 종류이다.
// 동일한 객체를 비교하면 False가 된다.(해결하기 위핸 객체를 변수에 저장해서 비교해야 한다.)
const arr2 = [1,2,3,4,5];
arr2 === [1,2,3,4,5]; // false값이 된다. 왜냐하면 []를 쓰는 순간 새로운 배열이 되므로.

// 참조와 복사(헷갈리면 직접 메모리를 그려본다. -> 객체가 저장되는 공간이랑 객체가 아닌 값(원시값)이 저장되는 공간이 분리되어 있다.)

// 참조하는 경우(객체인 값)
const person = {
    name : 'zerocho',
};
const bb = person; // 참조(bb는 person을 가리키게 된다.)
person.name = 'hero';
console.log(bb.name); // hero

// 복사하는 경우(객체가 아닌 값(원시값))
const numA = 1;
const numB = numA;
numA = 3;
console.log(numB); // 1

// 7. 순서도
// 항상 프로그래밍전에 순서도를 그리는 연습을 하자!

// -프로그램 절차를 만들 때 원칙
// 1. 프로그램 절차의 개수는 정해져 있어야 한다.
// 2. 각 절차는 항상 같은 내용이어야 한다.
// 3. 모든 가능성을 고려해야한다.
// 4. 예시는 절차를 검증하는데 사용한다.

prompt('몇 명?'); // prompt() : 입력을 받는다.
alert('경고'); // alert() : 경고창을 띄운다.
confirm(`맞나요?`); // confirm() : 확인, 취소 두 개중에 한 개를 받을 수 있다.

// 태그.addEventListener('이벤트이름',리스너함수(콜백함수));


// 8. 고차 함수(high order function) : 함수가 함수를 리턴한다.(화살표 2개)
// const onClickNumber = (number) =>{
//     return () => { 
//         if(operator){

//         }else{

//         }
//     };
// };

//           ||
//           ||
//           || 

const onClickNumber = (number) => () =>{
  if(operator){
      
  }else{

  }
};

// 9. if문 중첩 제거 방법
// (1) 공통된 절차를 각 분기점 내부에 넣는다.
// (2) 분기점에서 짧은 절차부터 실행하게 if문을 작성한다.
// (3) 짧은 절차가 끝나면 return(함수의 내부의 경우)이나 break(for문 내부의 경우)로 중단한다.
// (4) else를 제거한다.(이때 중첩문 하나가 제거된다.)
// (5) 1~4과정 반복
function test(){
  let result = '';
	if(a){
      if(!b){
        result = 'c';
      }
  }else{
      result = 'a';
  }
	result +='b';
	return result;
}

function removeIfTest() {
	let result = '';
	if(!a){
		result = 'a';
		result +='b';
		return result;
	}
	if(!b){
		result = 'c';
	}
	result +='b';
	return result;
	
}

