const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

// todo들을 저장하기 위한 배열 생성.
let toDos = [];// js가 실행될 때, 항상 빈 상태로 시작된다. 이것을 업데이트하기 위해 const->let으로 변경.

const TODOS_KEY = 'todos';

function deleteToDo(event){
    // event에는 많은 정보가 들어있다. 이를 확인해보면 눌러진 버튼의 부모 요소를 알 수 있다.(li)
    // console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();//삭제한다. 
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));// parseInt는 정수형으로 바꿔준다.
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //localStorage에 저장한다.
    //JSON.stringify() : object 나 array, 어떤 JS코드건 간에 그걸 string형태로 바꿔준다.
    //JSON.parse() : 사용할 수 있는 배열의 형태로 만들어준다.

}

function paintToDo(newToDo){
    // li라는 변수에 HTML의 li를 생성한다.(만들고 싶은 것을 생각하고 만들면 쉽다.(span도 마찬가지))
    const li = document.createElement('li');
    li.id = newToDo.id;
    const span = document.createElement('span');
    span.innerText = newToDo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click',deleteToDo);
    li.appendChild(span); // li 자식에 span추가
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    // 작성한 Input에 있는 ToDo를 변수에 저장
    const newToDo = toDoInput.value;
    // 그 후, toDoInput에 value값을 비워준다.
    // newToDo를 텍스트로 가진 obj생성(어떤 값을 delete하는지 알기 위해)
    const newToDoObj = {
        text : newToDo,
        id : Date.now(), // 각각의 item을 구별하기 위해 존재.
    };
    toDos.push(newToDoObj);// 작성한 값을 toDos라는 배열에 삽입.
    toDoInput.value = "";
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener('submit',handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


// 함수는 event처럼 item을 제공한다.
if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    // 함수를 간단하게 표한한다.(arrow function)
    toDos = parseToDos;
    parseToDos.forEach(paintToDo); // 각각의 item에 따라 실행한다.

}

// [1,2,3,4].filter(sexyfilter);
// 배열의 요소가 차례대로 sexyfilter을 실행한다.
// **sexyfilter 은 반드시 true를 리턴해야한다.
// sexyfilter(item){return item !== 3} // 3이 아니면 true 3이면 false(3일때 생략함)
