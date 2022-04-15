//다음 객체에서 a,c,e속성을 구조분해 할당을 이용해 변수에 할당하라.

const obj = {
  a: 'hello',
  b: {
    c: 'hi',
    d: {e: 'wow'},
  },
}

const { a, b: { c, d: {e}}} = obj; // 그대로 적어주면 된다.
console.log(a,c,e);


// 5X4짜리 2차원 배열을 만들어라. 모든 요소의 값은 1이다.

const { body } = document;
const $table = document.createElement('table');
const rows = [];
for(let i = 0; i < 5; i++){
  const $tr = document.createElement('tr');
  for(let j = 0; j < 4; j++){
    const $td = document.createElement('td');
    $td.textContent = 1;
    $tr.append($td);
  }
  $table.append($tr);
}

body.append($table);

