
// 변수 mainText를 만들고 h1태그를 가져온다
let mainText = document.querySelector('h1');

//scroll에 관련된 함수 실행, value에 윈도우의 스크롤 y좌표를 넣고
//그것이 300이 넘었을 때, h1에 style에 지정된 애니메이션 속성을 추가
//그렇지 않을 때, 다시 등장하는 애니메이션 실행 
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if(value>300){
        mainText.style.animation="reverseSlide 1s ease-out forwards";
    }else{
        mainText.style.animation=`slide 2s ease-out`;
    }
})