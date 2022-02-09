const clock = document.querySelector('#clock');

function getClock(){
    const date = new Date();
    const hours = fillTwoNumber(date.getHours());
    const minutes = fillTwoNumber(date.getMinutes());
    const seconds = fillTwoNumber(date.getSeconds());
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function fillTwoNumber(number){
    const twoNumber = String(number).padStart(2,'0');
    return twoNumber;
}
// setInterval(함수, 시간)을 통해 단편적으로 코드를 실행 할 수 있다.(반복 실행)
// setTimeout(함수, 시간)을 하면 지정한 시간이 지나고 함수가 한 번 실행된다.
getClock();
setInterval(getClock, 1000);

// string.padStart(길이, string)를 통해 길이가 부족한 문자를 인자로 받은 string값으로 앞에서 부터 채울 수 있다.(padEnd는 뒤쪽으로 채운다.)

