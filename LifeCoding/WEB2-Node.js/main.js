let http = require('http');
let fs = require('fs');
let url = require('url');
let qs = require('querystring');

let app = http.createServer(function(request,response){
    // createServer : nodejs로 웹브라우저가 접속이 들어올 때
    // request : 요청할 때 웹 서버가 보낸 정보들
    // response : 응답할 때 우리가 웹 브라우저에게 보낼 정보들
    let $url = request.url;
    let queryData = url.parse($url, true).query;
    let pathname = url.parse($url, true).pathname;
    let title = queryData.id;
    let list = `<ol>`;
    

    function templateHtml(title, list, body){
      return`
      <!doctype html>
      <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          <a href='/create'>create</a>
          ${body}
        </body>
      </html>
      `;
    }
    function templateList(filelist){
      let i = 0;
      while(i < filelist.length){
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i++;
      }
      list = list + `</ol>`;
    }

    console.log(pathname);
    if(pathname === '/'){
      if(!title){
        fs.readdir('./data', (err, filelist)=>{
          title = 'Welcome';
          description = 'Hello, Node.js';
          templateList(filelist);
          let template = templateHtml(title, list, `<h2>${title}</h2><p>${description}</p>`);
          response.writeHead(200);//파일을 성공적으로 전송했다.
          response.end(template);
        })
      } else{
        fs.readFile(`data/${title}`, 'utf-8' ,(err,description)=>{
          fs.readdir('./data', (err, filelist) => {
            templateList(filelist);
            let template = templateHtml(title, list, `<h2>${title}</h2><p>${description}</p>`);
            response.writeHead(200);//파일을 성공적으로 전송했다.
            response.end(template);
          });
        });
      } 
    } else if(pathname === '/create'){
      fs.readdir('./data', (err, filelist)=>{
        title = 'WEB-create';
        templateList(filelist);
        let template = templateHtml(title, list, `
          <form action='http://localhost:3000/create_process' method='post'>
            <p><input type='text' name='title' placeholder='title'></p>
            <p>
              <textarea name='description' placeholder='description'></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
        `);
        response.writeHead(200);//파일을 성공적으로 전송했다.
        response.end(template);
      })
    } else if (pathname === '/create_process') {
      let body = '';
      request.on('data', function(data){
        //웹 브라우저가 포스트 방식으로 데이터를 전송할 때 전송할 데이터가 너무 많으면 그 데이터를 한번에 처리하다가는 프로그램이 꺼진다거나 컴퓨터가 꺼진다. 그래서 request.on을 사용하여 조각으로 나눠서 조각을 수신할 때마다 콜백 함수를 호출한다.
        body = body + data;//콜백이 실행될 때마다 데이터를 body함수에 추가해준다.
      });
      request.on('end', function(){
        //정보 수신이 끝났을 때,
        let post = qs.parse(body);
        let title = post.title;
        let description = post.description;
      });
      response.writeHead(200);
      response.end('Success!');
    } else {
      response.writeHead(404);//파일을 찾을 수 없다. 
      response.end('Not Found');
    }
});
app.listen(3000);