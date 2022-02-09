// 명언 10개의 리스트 생성, 각 명언은 object로 구성되어 있으며, object들은 각각 quote와 author를 가지고 있다.
const quotes = [
    {
        quote: '승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다.',
        author: '크리스티 메튜슨'
    },
    {
        quote: '낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.',
        author: '메이슨 쿨리'
    },
    {
        quote: '산을 움직이려 하는 이는 작은 돌을 들어내는 일로 시작한다.',
        author: '공자'
    },
    {
        quote: '휴식은 게으름도, 멈춤도 아니다.',
        author: '헨리 포드'
    },
    {
        quote: '열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.',
        author: '윈스턴 처칠'
    },
    {
        quote: '어제로 돌아갈 수 없다. 왜냐하면 나는 어제와는 다른 사람이 되었기 때문이다.',
        author: '루이스 캐럴'
    },
    {
        quote: '해야할 일은 과감히 하라, 결심한 일은 반드시 실행하라',
        author: '벤자민 프랭클린'
    },
    {
        quote: '자기 신뢰는 성공의 첫 번째 비결이다.',
        author: '랄프 알도 에머슨'
    },
    {
        quote: '현재와 미래는 어떻게든 연결되어 있다.',
        author: '스티븐 잡스'
    },
    {
        quote: '고통없이 얻는 것은 없다.(No Pain, No Gain)',
        author: '토머스 제퍼슨'
    },
];

const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');

// random을 구현하기 위해 Math모듈을 사용한다.
// Math.random() : 0~1사이의 값 출력.
// Math.round() : 소숫점 1의 자리에서 반올림.
// Math.ceil() : 소숫점 1의 자리에서 올림.
// Math.floor() : 소숫점 1의 자리에서 내림.
// quotes[] : []사이에 숫자에 따라 선택되는 명언이 달라진다. 0~9

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;



