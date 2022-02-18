let http = require('http');
let fs = require('fs');
let url = require('url');

let app = http.createServer(function(request,response){
    let $url = request.url;
    let queryData = url.parse($url, true).query;
    let pathname = url.parse($url, true).pathname;
    let title = queryData.id;

    if(pathname === '/'){
      if(!title){
        fs.readFile(`data/${title}`, 'utf-8' ,(err,description)=>{
          title = 'Welcome';
          description = 'Hello, Node.js';
          let template = `
          <!doctype html>
          <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              <ol>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
              </ol>
              <h2>${title}</h2>
              <p>${description}</p>
            </body>
          </html>
          `;
          response.writeHead(200);//파일을 성공적으로 전송했다.
          response.end(template);
        });
      } else{
        fs.readFile(`data/${title}`, 'utf-8' ,(err,description)=>{
          let template = `
          <!doctype html>
          <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              <ol>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
              </ol>
              <h2>${title}</h2>
              <p>${description}</p>
            </body>
          </html>
          `;
          response.writeHead(200);//파일을 성공적으로 전송했다.
          response.end(template);
        });
      } 
    } else {
      response.writeHead(404);//파일을 찾을 수 없다. 
      response.end('Not Found');
    }

    
    
});
app.listen(3000);