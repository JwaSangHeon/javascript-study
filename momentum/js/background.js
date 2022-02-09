const images = ['0.jpeg','1.jpeg','2.jpeg'];

const chosenImage = images[Math.floor(Math.random()*images.length)];

// 항상 HTML에서 만든 것을 js에서 가져와서 수정했지만, js에서 HTML에 요소를 만들 수 있다.
// createElement를 사용하면 요소를 생성할 수 있다.
const bgImage = document.createElement('img');
// 이미지 src요소에 추가
bgImage.src = `img/${chosenImage}`;

// appendChild는 createElement에서 만든 요소를 body 가장 마지막에 추가한다.
// prependChild는 요소를 가장 위에 추가한다.
document.body.appendChild(bgImage);

