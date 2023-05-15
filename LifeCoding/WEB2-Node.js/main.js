const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");
const path = require("path");
const template = require("./lib/template.js");

const app = http.createServer(async function (request, response) {
  const _url = request.url;
  const queryData = url.parse(_url, true).query;
  s;
  const pathname = url.parse(_url, true).pathname;

  let title = queryData.id;

  if (pathname === "/") {
    if (!title) {
      s;
      fs.readdir("./data", (err, filelist) => {
        title = "Welcome";
        const description = "Hello, WEB";
        const list = template.list(filelist);
        const body = `<h2>${title}</h2>
        <p>
        ${description}
        </p>`;
        const control = `<a href="/create">create</a>`;
        const html = template.html(title, list, body, control);
        response.writeHead(200);
        response.end(html);
      });
    } else {
      const filteredId = path.parse(title).base;
      fs.readFile(`data/${filteredId}`, "utf-8", (err, description) => {
        fs.readdir("./data", (err, filelist) => {
          const list = template.list(filelist);
          const body = `<h2>${title}</h2>
            <p>
            ${description}
            </p>`;
          const control = `<a href="/create">create</a> <a href="/update?id=${title}">update</a> <form action="/process_delete" method="post"><input type="hidden" name="id" value="${title}"/><input type="submit" value="delete"/></form>`;
          const html = template.html(title, list, body, control);
          response.writeHead(200);
          response.end(html);
        });
      });
    }
  } else if (pathname === "/create") {
    fs.readdir("./data", (err, filelist) => {
      title = "create";
      const list = template.list(filelist);
      const body = `
        <form action="/process_create" method="post">
        <p><input type="text" name="title" placeholder="title"/></p>  
        <p><textarea name="description" placeholder="description"></textarea></p>
        <p><button type="submit">create</button></p>
        </form>
      `;
      const control = ``;
      const html = template.html(title, list, body, control);
      response.writeHead(200);
      response.end(html);
    });
  } else if (pathname === "/process_create") {
    let body = "";
    request.on("data", (data) => {
      body += data;
    });

    request.on("end", () => {
      let post = qs.parse(body);
      let title = post.title;
      let description = post.description;
      fs.writeFile(`./data/${title}`, description, "utf8", (err) => {
        response.writeHead(302, { Location: `/?id=${title}` });
        response.end();
      });
    });
  } else if (pathname === "/update") {
    const filteredId = path.parse(title).base;
    fs.readFile(`data/${filteredId}`, "utf-8", (err, description) => {
      fs.readdir("./data", (err, filelist) => {
        const list = template.list(filelist);
        const body = `
            <form action="/process_update" method="post">
              <input type="hidden" name="id" value="${title}"/>
              <p><input type="text" name="title" placeholder="title" value="${title}"/></p>  
              <p><textarea name="description" placeholder="description" >${description}</textarea></p>
              <p><button type="submit">update</button></p>
            </form>
          `;
        const control = ``;
        const html = template.html(title, list, body, control);
        response.writeHead(200);
        response.end(html);
      });
    });
  } else if (pathname === "/process_update") {
    let body = "";
    request.on("data", (data) => {
      body += data;
    });
    request.on("end", () => {
      let post = qs.parse(body);

      const id = post.id;
      const title = post.title;
      const description = post.description;

      fs.rename(`data/${id}`, `data/${title}`, (err) => {
        fs.writeFile(`./data/${title}`, description, "utf-8", (err) => {
          response.writeHead(302, { Location: `/?id=${title}` });
          response.end();
        });
      });
    });
  } else if (pathname === "/process_delete") {
    let body = "";
    request.on("data", (data) => {
      body += data;
    });
    request.on("end", () => {
      let post = qs.parse(body);
      const id = path.parse(post.id).base;
      fs.unlink(`data/${id}`, (err) => {
        response.writeHead(302, { Location: `/` });
        response.end();
      });
    });
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});

app.listen(3000);
